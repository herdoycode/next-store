import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategorys = () => {
  return useQuery<Category[]>({
    queryKey: ["categorys"],
    queryFn: () => axios.get("/api/categorys").then((res) => res.data),
    staleTime: 60 * 1000,
  });
};
export default useCategorys;
