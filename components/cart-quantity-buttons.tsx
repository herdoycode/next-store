"use client";
import { Button } from "@/components/ui/button";
import { CartItem, useCartStore } from "@/store";
import { Flex } from "@radix-ui/themes";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  cartItem: CartItem;
}
const CartQuantityButtons = ({ cartItem }: Props) => {
  const incQuantity = useCartStore((s) => s.incQuantity);
  const decQuantity = useCartStore((s) => s.decQuantity);

  return (
    <Flex align="center" py="6">
      <Button
        size="sm"
        disabled={cartItem.quantity <= 1}
        onClick={() => decQuantity(cartItem.id)}
        variant="outline"
      >
        <FaMinus />
      </Button>
      <Button size="sm" variant="ghost" disabled>
        {cartItem.quantity}
      </Button>
      <Button
        size="sm"
        disabled={cartItem.quantity >= 10}
        onClick={() => incQuantity(cartItem.id)}
        variant="outline"
      >
        <FaPlus />
      </Button>
    </Flex>
  );
};

export default CartQuantityButtons;
