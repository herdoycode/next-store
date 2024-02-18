"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const SortOrder = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Select
      onValueChange={(value) => {
        const params = new URLSearchParams();

        value == "all"
          ? params.delete("orderBy")
          : params.append("orderBy", value);
        if (searchParams.get("page"))
          params.append("page", searchParams.get("page")!);
        if (searchParams.get("categoryId"))
          params.append("categoryId", searchParams.get("categoryId")!);
        if (searchParams.get("price"))
          params.append("price", searchParams.get("price")!);

        const query = params.size ? "?" + params.toString() : "";
        router.push("/products" + query);
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
  );
};

export default SortOrder;
