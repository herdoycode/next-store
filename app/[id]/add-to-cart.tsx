"use client";
import { Button } from "@/components/ui/button";
import { useCartStore, useQuantigyStore } from "@/store";
import { Product } from "@prisma/client";
import { BsCartPlus } from "react-icons/bs";

interface Props {
  product: Product;
}

const AddToCart = ({ product }: Props) => {
  const quantity = useQuantigyStore((s) => s.quantity);
  const addToCart = useCartStore((s) => s.addToCart);
  return (
    <Button
      onClick={() =>
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        })
      }
      className="w-fit"
    >
      <BsCartPlus className="me-2 text-2xl" /> Add To Cart
    </Button>
  );
};

export default AddToCart;
