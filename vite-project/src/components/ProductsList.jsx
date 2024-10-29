import React from "react";
import styles from "./productsList.module.css";
import { useProducts } from "../services/queries";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useModal } from "../context/ModalProvider";

function ProductsList({page , search}) {
  const { data, isPending, isLoading } = useProducts(page , search);
  console.log(data?.data, isLoading, isPending);
  const {
    setAction,
    setTitle,
    setIsOpend,
    setDelete,
    setEditProduct,
    setEdit,
    setDeleteProduct
  } = useModal();

  const clickHandler = (product) => {
    setEdit(true);
    setEditProduct(product);
    setTitle("ویرایش محصول");
    setAction("ویرایش");
    setIsOpend(true);
  };
  const clickDeleteHandler = (product) => {
    setDelete(true);
    setDeleteProduct(product)
    setTitle("آیا از حذف این محصول مطمئن هستید؟");
  };
  return (
    <>
      <table className={styles.titels}>
        <thead>
          <tr>
            <th className={styles.kala}>نام کالا</th>
            <th className={styles.productTitle}>موجودی</th>
            <th className={styles.productTitle}>قیمت</th>
            <th className={styles.productTitle}>شناسه کالا</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              {" "}
              <td>
                <h4>isLoading...</h4>
              </td>
            </tr>
          ) : (
            <>
              {data?.data.data.map((product) => (
                <tr>
                  <td className={styles.kala}>{product.name}</td>
                  <td className={styles.productDetail}>{product.quantity}</td>
                  <td className={styles.productDetail}>{product.price}</td>
                  <td className={styles.productDetail}>{product.id}</td>
                  <td className={styles.productDetail}>
                    {" "}
                    <FiEdit onClick={() => clickHandler(product)} />{" "}
                    <RiDeleteBin6Line
                      onClick={() => clickDeleteHandler(product)}
                    />
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ProductsList;
