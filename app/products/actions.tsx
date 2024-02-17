"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Flex } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import ProductFilter from "./filter";

const Actions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Flex mb="6" justify={{ initial: "between", md: "end" }}>
      <div className="block md:hidden">
        <ProductFilter />
      </div>
      <Select
        onValueChange={(value) => {
          value === "all"
            ? router.push("/products")
            : router.push(`/products?orderBy=${value}`);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Default</SelectItem>
          <SelectItem value="asc">Name: asc</SelectItem>
          <SelectItem value="desc">Name: desc</SelectItem>
        </SelectContent>
      </Select>
    </Flex>
  );
};

export default Actions;
