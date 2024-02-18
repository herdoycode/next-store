import { Product } from "@prisma/client";
import { Box, Card, Grid, Heading, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import Actions from "./actions";

interface Props {
  products: Product[];
}

const Products = async ({ products }: Props) => {
  return (
    <Box px="3">
      <Actions />
      <Grid columns={{ initial: "1fr", md: "1fr 1fr 1fr" }} gap="5">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card>
              <Inset clip="padding-box" side="top" pb="current">
                <Image
                  width={600}
                  height={600}
                  src={product.image}
                  alt="Bold typography"
                  className="block object-cover w-full h-[160px] hover:scale-125 transition duration-500 cursor-pointer"
                  priority
                />
              </Inset>
              <Heading as="h3" size="5" weight="light">
                {product.name}
              </Heading>
              <Text as="span" className="text-zinc-400">
                ${product.price}
              </Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
