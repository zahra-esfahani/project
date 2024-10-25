import React, { createContext, useContext, useState } from "react";
import Modal from "./Modal";

export const modalContext = createContext();

function ModalProvider({ children }) {
  const [title, setTitle] = useState("");
  const [action, setAction] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const[edit , setEdit]=useState(false)
  const [isOpend, setIsOpend] = useState(false);

  return (
    <>
      <modalContext.Provider
        value={{ setAction, setTitle, setIsOpend, setEditProduct , setEdit }}
      >
        <Modal
          title={title}
          action={action}
          isOpend={isOpend}
          editProduct={editProduct}
          edit={edit}
          setEdit={setEdit}
        />
        {children}
      </modalContext.Provider>
    </>
  );
}

const useModal = () => {
  const data = useContext(modalContext);
  return data;
};

export { useModal };
export default ModalProvider;
