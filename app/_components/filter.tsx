"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import CategoryList from "./category-list";
import PriceSlider from "./price-slider";

const ProductFilter = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)} variant="outline">
        <BsFilter className="text-2xl mr-1" />
        Filter
      </Button>
      {visible && (
        <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-end bg-[rgba(0,0,0,.4)] z-40">
          <div className="w-[calc(100vw - 40px)] absolute right-0 top-0 h-full bg-white dark:bg-black z-50 p-4">
            <div className="flex justify-end items-end w-full px-4">
              <Button
                onClick={() => setVisible(!visible)}
                variant="outline"
                className="rounded-3xl"
              >
                X
              </Button>
            </div>
            <div className="space-y-3">
              <PriceSlider />
              <CategoryList />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFilter;
