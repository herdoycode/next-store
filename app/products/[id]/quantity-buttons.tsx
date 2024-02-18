"use client";
import { Button } from "@/components/ui/button";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const QuantityButtons = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <Flex align="center" py="6">
      <Button
        disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}
        variant="outline"
      >
        <FaMinus />
      </Button>
      <Button variant="ghost" disabled>
        {quantity}
      </Button>
      <Button
        disabled={quantity >= 10}
        onClick={() => setQuantity(quantity + 1)}
        variant="outline"
      >
        <FaPlus />
      </Button>
    </Flex>
  );
};

export default QuantityButtons;
