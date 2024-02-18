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
        const params = new URLSearchParams(searchParams);
        value === "all"
          ? params.delete("orderBy")
          : params.set("orderBy", value);
        router.push("?" + params.toString());
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
