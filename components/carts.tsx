"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartItem, useCartStore } from "@/store";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import CartQuantityButtons from "./cart-quantity-buttons";
import { Button } from "./ui/button";
const Carts = () => {
  const cartItems = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const sumTotal = (arr: CartItem[]) =>
    arr.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <div className="relative mb-[-4px]">
            <MdOutlineShoppingBag className="text-2xl" />
            <div
              className="absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs text-secondary"
              color={10 === 10 ? "red" : "grass"}
            >
              {cartItems.length}
            </div>
          </div>
        </button>
      </SheetTrigger>
      <SheetContent>
        {cartItems.length <= 0 ? (
          <div className="flex items-center justify-center flex-col h-screen">
            <Image
              width={150}
              height={150}
              src="/empty_cart.png"
              alt="empty cart"
            />
            <Heading as="h3">Your cart is empty!</Heading>
          </div>
        ) : (
          <>
            <SheetHeader>
              <SheetTitle className="mb-6">Carts</SheetTitle>
            </SheetHeader>
            <Flex direction="column">
              {cartItems.map((i) => (
                <Flex
                  align="center"
                  justify="between"
                  className="mb-4"
                  key={i.id}
                >
                  <Image
                    src={i.image}
                    width="60"
                    height="50"
                    alt="Product image"
                  />
                  <CartQuantityButtons cartItem={i} />
                  <Flex align="center" direction="row">
                    <Text as="p"> ${i.price * i.quantity} </Text>
                    <Button
                      onClick={() => removeItem(i.id)}
                      className="bg-red-600 hover:bg-red-700 ms-3"
                      size="sm"
                    >
                      <IoClose />
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </Flex>
            <hr className="mt-3" />
            <Flex
              justify="between"
              align="center"
              className="mt-2"
              direction="column"
            >
              <Flex width="100%" align="center" justify="between">
                <Text className="text-zinc-400 dark:text-zinc-300">
                  Sub Total:
                </Text>
                <Text className="text-zinc-800 dark:text-zinc-300">
                  {" "}
                  ${sumTotal(cartItems)}{" "}
                </Text>
              </Flex>
              <Flex width="100%" align="center" justify="between">
                <Text className="text-zinc-400 dark:text-zinc-300">
                  Shipping:
                </Text>
                <Text className="text-zinc-800 dark:text-zinc-300">$10</Text>
              </Flex>
            </Flex>
            <hr className="mt-6 mb-2" />
            <Flex width="100%" align="center" justify="between">
              <Text className="text-zinc-400 dark:text-zinc-300">Total:</Text>
              <Text className="text-zinc-800 dark:text-zinc-300">
                ${sumTotal(cartItems) + 10}
              </Text>
            </Flex>
            <SheetFooter className="mt-6">
              <Button type="submit" className="w-full">
                Checkout <FaArrowRightLong className="ms-3" />
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Carts;
