"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return router.push("/products");
};

export default Home;
