import { Button } from "@/components/ui/button";
import { BsCartPlus } from "react-icons/bs";
import React from "react";

const AddToCart = () => {
  return (
    <Button className="w-fit">
      <BsCartPlus className="me-2 text-2xl" /> Add To Cart
    </Button>
  );
};

export default AddToCart;
