"use client";
import Spinner from "@/components/spinner";
import { Category } from "@prisma/client";
import { Box, Flex, Heading, RadioGroup, Text } from "@radix-ui/themes";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onValueChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("name");
    categoryId === "all"
      ? params.delete("categoryId")
      : params.set("categoryId", categoryId);
    router.push("?" + params.toString());
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
          <RadioGroup.Root
            variant="soft"
            size="3"
            onValueChange={onValueChange}
            defaultValue={searchParams.get("categoryId") || "all"}
          >
            <Flex gap="2" direction="column">
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="all" />
                  All
                </Flex>
              </Text>
              {categorys.map((category) => (
                <Text key={category.id} as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value={category.id} />
                    {category.name}
                  </Flex>
                </Text>
              ))}
            </Flex>
          </RadioGroup.Root>
        </>
      )}
    </Box>
  );
};

export default CategoryList;
