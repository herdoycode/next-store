"use client";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";

const PriceSlider = () => {
  const [range, setRange] = useState<number>(100);
  return (
    <Box className="shadow-md rounded-md" p="3">
      <Heading as="h3" mb="3">
        Price
      </Heading>
      <Slider
        onValueChange={(e) => setRange(e[0])}
        defaultValue={[range]}
        max={100}
        step={1}
      />
      <Flex align="center" justify="between" gap="6" mt="6">
        <Input placeholder="0" disabled />
        <Input
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
        />
      </Flex>
    </Box>
  );
};

export default PriceSlider;