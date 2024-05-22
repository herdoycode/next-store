import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BsFilter } from "react-icons/bs";
import CategoryList from "./category-list";
import PriceSlider from "./price-slider";

const ProductFilter = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">
          <BsFilter className="text-2xl mr-1" />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
          <div className="space-y-5">
            <PriceSlider />
            <CategoryList />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ProductFilter;
