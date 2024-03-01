import { Box, Container, Flex, Skeleton } from "@radix-ui/themes";

const ProductDetails = () => {
  return (
    <div className="py-16 px-2">
      <Container>
        <Flex gap="6" direction={{ initial: "column", md: "row" }}>
          <Box className="flex-1">
            <Skeleton className="w-full h-[500px]" />
          </Box>
          <Flex direction="column" className="flex-1">
            <Skeleton className="h-6 w-full mb-3" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
            </div>
            <div className="my-3">
              <Skeleton className="w-[150px] h-[30px]" />
            </div>
            <div className="my-3">
              <Skeleton className="w-[150px] h-[30px]" />
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default ProductDetails;
