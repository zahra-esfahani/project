import React, { useState } from "react";
import styles from "./Pagination.module.css";
import { useProducts } from "../services/queries";
import { useQueryClient } from "@tanstack/react-query";
function Pagination({SetPage}) {
  // const { data, error, isSuccess } = useProducts(page);
 

  // console.log(error?.response.data.message, data, isSuccess);
  // if (isPending)
  //   return 

  const clickhandler = (e) => {
    console.log(e.target.innerText);
    SetPage(e.target.innerText);
  };
  // console.log(page);

  return (
    <>
      <div className={styles.parent}>
        <p onClick={clickhandler}>1</p>
        <p onClick={clickhandler}>2</p>
        <p onClick={clickhandler}>3</p>
      </div>
    </>
  );
}

export default Pagination;
