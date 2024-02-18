import { Flex } from "@radix-ui/themes";

import ProductFilter from "./filter";
import SortOrder from "./sort-order";

const Actions = () => {
  return (
    <Flex mb="6" justify={{ initial: "between", md: "end" }}>
      <div className="block md:hidden">
        <ProductFilter />
      </div>
      <SortOrder />
    </Flex>
  );
};

export default Actions;
