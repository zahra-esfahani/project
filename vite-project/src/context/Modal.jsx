import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { useModal } from "./ModalProvider";
import { useNewProduct } from "../services/mutaions";
import { useQueryClient } from "@tanstack/react-query";
import { useProducts } from "../services/queries";

function Modal({ isOpend, title, action, editProduct, edit, setEdit }) {
  useEffect(() => {
    if (edit) {
      setNewProduct({
        name: editProduct.name,
        price: editProduct.price,
        quantity: editProduct.quantity,
      });
    } else {
      setNewProduct({ name: "", price: null, quantity: null });
    }
  }, [edit]);

  const { setIsOpend } = useModal();
  const { mutate } = useNewProduct();
  const { queryKey } = useProducts();
  const queryClient = useQueryClient();

  const [NewProduct, setNewProduct] = useState({
    name: "",
    price: null,
    quantity: null,
  });

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
      },
      onError: (error) => console.log(error.message),
    });
    setIsOpend(false);
  };
  return (
    <>
      {isOpend && (
        <div className={styles.parent}>
          <div className={styles.modal}>
            <h4>{title}</h4>
            <div className={styles.design}>
              <label htmlFor="name">نام کالا</label>
              <input
                type="text"
                name="name"
                placeholder="نام کالا"
                value={NewProduct.name}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.design}>
              <label htmlFor="quantity">تعداد موجودی </label>
              <input
                type="text"
                name="quantity"
                placeholder=" تعداد"
                value={NewProduct.quantity}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.design}>
              <label htmlFor="price">قیمت</label>
              <input
                type="text"
                name="price"
                placeholder="قیمت "
                value={NewProduct.price}
                onChange={changeHandler}
              />
            </div>

            <div className={styles.buttons}>
              <button onClick={clickHandler}>{action}</button>
              <button
                onClick={() => {
                  setIsOpend(false), setEdit(false);
                }}
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
