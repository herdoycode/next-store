"use client";
import Spinner from "@/components/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import { Category } from "@prisma/client";
import { Box, Flex, Heading } from "@radix-ui/themes";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onValueChange = (categoryId: string) => {
    const params = new URLSearchParams();
    if (categoryId) params.append("categoryId", categoryId);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push("/products" + query);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/categorys")
      .then(({ data }) => {
        setCategorys(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <Box className="shadow-md rounded-md" p="3">
      <Heading as="h3" mb="3">
        Categorys
      </Heading>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {categorys.map((category) => (
            <Flex key={category.id} align="center" gap="2" mb="3">
              <Checkbox
                id={category.id}
                onCheckedChange={() => onValueChange(category.id)}
              />
              <label
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </label>
            </Flex>
          ))}
        </>
      )}
    </Box>
  );
};

export default CategoryList;
