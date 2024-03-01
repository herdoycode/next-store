"use client";
import { Button } from "@/components/ui/button";
import { useQuantigyStore } from "@/store";
import { Flex } from "@radix-ui/themes";
import { FaMinus, FaPlus } from "react-icons/fa6";

const QuantityButtons = () => {
  const quantity = useQuantigyStore((s) => s.quantity);
  const incQuantity = useQuantigyStore((s) => s.incQuantity);
  const decQuantity = useQuantigyStore((s) => s.decQuantity);
  return (
    <Flex align="center" py="6">
      <Button
        size="sm"
        disabled={quantity <= 1}
        onClick={() => decQuantity()}
        variant="outline"
      >
        <FaMinus />
      </Button>
      <Button size="sm" variant="ghost" disabled>
        {quantity}
      </Button>
      <Button
        size="sm"
        disabled={quantity >= 10}
        onClick={() => incQuantity()}
        variant="outline"
      >
        <FaPlus />
      </Button>
    </Flex>
  );
};

export default QuantityButtons;
