import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useProducts = (page , search) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10&name=${search}`);
  const queryKey = ["products-list", page , search];
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };
  return useQuery({
    queryKey,
    queryFn,
    onSuccess
  });
};

export { useProducts };
