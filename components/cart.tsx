import { MdOutlineShoppingBag } from "react-icons/md";

const Cart = () => {
  return (
    <div className="relative mb-[-4px]">
      <MdOutlineShoppingBag className="text-2xl" />
      <div
        className="absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs text-secondary"
        color={10 === 10 ? "red" : "grass"}
      >
        5
      </div>
    </div>
  );
};

export default Cart;
