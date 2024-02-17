import prisma from "@/prisma/client";
import { Container, Grid } from "@radix-ui/themes";
import Pagination from "./pagination";
import Products from "./products";
import Sidebar from "./sidebar";

interface Props {
  searchParams: {
    page: string;
    categoryId: string;
    orderBy: "asc" | "desc";
    price: string;
  };
}

const ProductsPage = async ({ searchParams }: Props) => {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 6;
  const price = parseInt(searchParams.price) || undefined;
  const products = await prisma.product.findMany({
    where: {
      categoryId: searchParams.categoryId,
      price: {
        lte: price,
      },
    },
    orderBy: {
      name: searchParams.orderBy,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const productCount = await prisma.product.count({
    where: {
      categoryId: searchParams.categoryId,
      price: {
        lte: price,
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
