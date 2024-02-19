import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Inset,
  Skeleton,
} from "@radix-ui/themes";

const Loading = () => {
  return (
    <div className="px-4 py-16">
      <Container>
        <Grid columns={{ initial: "1fr", md: "300px 1fr" }}>
          <Box className="hidden space-y-4 lg:block" p="3">
            {[1, 2].map((i) => (
              <Flex
                direction="column"
                justify="between"
                className="h-[150px] shadow-md p-3 rounded-lg"
                key={i}
              >
                <Skeleton className="h-7" />
                <Skeleton className="h-5" />
                <Skeleton className="h-5" />
                <Skeleton className="h-5" />
              </Flex>
            ))}
          </Box>
          <Box px="3">
            <Flex py="5" justify="between">
              <Skeleton className="h-7 w-[150px]" />
              <Skeleton className="h-7 w-[150px]" />
            </Flex>
            <Grid columns={{ initial: "1fr", md: "1fr 1fr 1fr" }} gap="5">
              {[1, 2, 3, 4, 5, 6].map((product) => (
                <div key={product}>
                  <Card>
                    <Inset clip="padding-box" side="top" pb="current">
                      <Skeleton className="block object-cover w-full h-[160px]" />
                    </Inset>
                    <Skeleton className="w-[10x] h-7 mb-2" />
                    <Skeleton className="w-[100px] h-5" />
                  </Card>
                </div>
              ))}
            </Grid>
            <Skeleton className="h-10 w-96 mt-6" />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Loading;
