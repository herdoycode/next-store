import prisma from "@/prisma/client";
import { Container, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Pagination from "./pagination";
import Products from "./products";
import Sidebar from "./sidebar";

interface Props {
  searchParams: {
    page: string;
    categoryId: string;
    orderBy: "asc" | "desc";
    price: string;
    name: string;
  };
}

const ProductsPage = async ({ searchParams }: Props) => {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 6;

  const setPrice = parseInt(searchParams.price) || undefined;
  const setOrderBy = () => {
    if (searchParams.orderBy === "asc") return "asc";
    if (searchParams.orderBy === "desc") return "desc";
    return "asc";
  };

  // Get filtered products
  const products = await prisma.product.findMany({
    where: {
      categoryId: searchParams.categoryId,
      price: {
        lte: setPrice,
      },
      name: {
        startsWith: searchParams.name,
        mode: "insensitive",
      },
    },
    orderBy: {
      name: setOrderBy(),
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  if (!products) notFound;

  const productCount = await prisma.product.count({
    where: {
      categoryId: searchParams.categoryId,
      price: {
        lte: setPrice,
      },
    },
  });
  return (
    <div className="px-4 py-16">
      <Container>
        <Grid columns={{ initial: "1fr", md: "300px 1fr" }}>
          <Sidebar />
          <div>
            <Products products={products} />
            <Pagination
              pageSize={pageSize}
              itemCount={productCount}
              currentPage={page}
            />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
