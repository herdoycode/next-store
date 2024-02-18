import { Flex } from "@radix-ui/themes";
import ProductFilter from "./filter";
import Search from "./search";
import SortOrder from "./sort-order";

const Actions = () => {
  return (
    <Flex
      mb="6"
      justify="between"
      direction={{ initial: "column", md: "row" }}
      gap={{ initial: "6", md: "0" }}
    >
      <Search />
      <div className="flex items-center justify-between gap-4 lg:justify-center">
        <div className="block lg:hidden">
          <ProductFilter />
        </div>
        <SortOrder />
      </div>
    </Flex>
  );
};

export default Actions;
