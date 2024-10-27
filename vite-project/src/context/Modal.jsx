import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { useModal } from "./ModalProvider";
import { useEditAndCreateProduct } from "../services/mutaions";
import { useQueryClient } from "@tanstack/react-query";
import { useProducts } from "../services/queries";
import EditAndCreateModal from "../components/EditAndCreateModal";

function Modal({ isOpend, title, action, editProduct, edit, setEdit }) {
  useEffect(() => {
    if (edit) {
      setNewProduct({
        name: editProduct.name,
        price: editProduct.price,
        quantity: editProduct.quantity,
        id: editProduct.id,
      });
    } else {
      setNewProduct({ name: "", price: null, quantity: null });
    }
  }, [edit]);

  const { setIsOpend } = useModal();
  const { queryKey } = useProducts();
  const queryClient = useQueryClient();

  const [NewProduct, setNewProduct] = useState({
    name: "",
    price: null,
    quantity: null,
  });
  const { mutate } = useEditAndCreateProduct(NewProduct.id, edit);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewProduct((i) => ({ ...i, [name]: value }));
  };

  const clickHandler = () => {
    mutate(NewProduct, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({
          queryKey,
        });
        setNewProduct({ name: "", price: null, quantity: null });
        setEdit(false);
      },
      onError: (error) => console.log(error.message),
    });
    setIsOpend(false);
  };
  return (
    <>
      {isOpend && (
        <EditAndCreateModal
          changeHandler={changeHandler}
          clickHandler={clickHandler}
          NewProduct={NewProduct}
          setEdit={setEdit}
          title={title}
          action={action}
        />
      )}
    </>
  );
}

export default Modal;
