"use client";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Input
      className="w-full lg:w-fit"
      type="text"
      onChange={(e) => {
        const params = new URLSearchParams(searchParams);
        e.target.value === ""
          ? params.delete("name")
          : params.set("name", e.target.value);
        router.push("?" + params.toString());
      }}
      placeholder="Search..."
    />
  );
};

export default Search;
