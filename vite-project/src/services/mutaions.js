import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useSignIn=()=>{
  const mutationFn = (data) => api.post("auth/register", data);
  return useMutation({ mutationFn });
}

const useLogIn=()=>{
  const mutationFn = (data) => api.post("auth/login", data);
  return useMutation({ mutationFn });

}

const useNewProduct=()=>{
  const mutationFn = (data) => api.post("products", data);
  return useMutation({ mutationFn });
}
export{useSignIn , useLogIn , useNewProduct}