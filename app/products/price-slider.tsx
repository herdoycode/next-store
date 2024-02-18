"use client";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const PriceSlider = () => {
  const [range, setRange] = useState<number>(100);
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Box className="shadow-md rounded-md" p="3">
      <Heading as="h3" mb="3">
        Price
      </Heading>
      <Slider
        defaultValue={[100]}
        onValueChange={(e) => {
          setRange(e[0]);
          const params = new URLSearchParams(searchParams);
          params.set("price", e[0].toString());
          router.push("?" + params.toString());
        }}
        max={100}
        step={1}
      />
      <Flex align="center" justify="between" gap="6" mt="6">
        <Input placeholder="0" value={0} disabled />
        <Input disabled value={range} />
      </Flex>
    </Box>
  );
};

export default PriceSlider;
