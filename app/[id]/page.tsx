import prisma from "@/prisma/client";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCart from "./add-to-cart";
import QuantityButtons from "./quantity-buttons";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetails = async ({ params }: Props) => {
  const product = await prisma.product.findUnique({ where: { id: params.id } });
  if (!product) notFound();
  return (
    <div className="py-16 px-2">
      <Container>
        <Flex gap="6" direction={{ initial: "column", md: "row" }}>
          <Box className="flex-1">
            <Image
              src={product.image}
              width={800}
              height={800}
              alt={product.image}
              className="w-full"
            />
          </Box>
          <Flex direction="column" className="flex-1">
            <Heading as="h2" mb="2">
              {product.name}{" "}
            </Heading>
            <Text> {product.description} </Text>
            <QuantityButtons />
            <AddToCart product={product} />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default ProductDetails;
