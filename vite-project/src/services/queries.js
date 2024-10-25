import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useProducts=()=>{
    const queryKey=["products-list"];
    const queryFn=()=>api.get("products");

    return useQuery({queryKey , queryFn})
}


export {useProducts}