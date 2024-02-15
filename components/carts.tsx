import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Button } from "./ui/button";

import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

const Carts = () => {
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
              5
            </div>
          </div>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-6">Carts</SheetTitle>
        </SheetHeader>
        <Flex direction="column">
          {[1, 2, 3, 4, 5].map((i) => (
            <Flex align="center" justify="between" className="mb-4" key={i}>
              <Image
                src="/prod1.jpeg"
                width="60"
                height="50"
                alt="Product image"
              />

              <Flex className="bg-secondary">
                <Button size="sm">-</Button>
                <Button
                  disabled
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-none"
                >
                  2
                </Button>
                <Button size="sm">+</Button>
              </Flex>
              <Flex align="center" direction="row">
                <Text as="p">$405</Text>
                <Button className="bg-red-600 hover:bg-red-700 ms-3" size="sm">
                  X
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
            <Text className="text-zinc-400">Sub Total:</Text>
            <Text className="text-zinc-800">$2025</Text>
          </Flex>
          <Flex width="100%" align="center" justify="between">
            <Text className="text-zinc-400">Shipping:</Text>
            <Text className="text-zinc-800">$10</Text>
          </Flex>
        </Flex>
        <hr className="mt-6 mb-2" />
        <Flex width="100%" align="center" justify="between">
          <Text className="text-zinc-400">Total:</Text>
          <Text className="text-zinc-800">$2035</Text>
        </Flex>
        <SheetFooter className="mt-6">
          <Button type="submit" className="w-full">
            Checkout <FaArrowRightLong className="ms-3" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Carts;
