import React from "react";
import { useAuth } from "../../contexts/auth";
import { ModalContext } from "../../contexts/modalContext";
import { CategoryForm } from "../CategoryForm";
import { CategoryList } from "../CategoryList";
import { EditCategoryForm } from "../EditCategoryForm";

export function CategoryPage(){
  const {openModal} = React.useContext(ModalContext);
  const auth = useAuth();
  // console.log(auth)
  return(
    <div className="container">
      <div className="card mb-3">

        {(!!auth.user?.token && auth.user?.status === 1) && (
          <>
            <h3 className="card-header">
            {openModal!== true? <b>AGREGAR CATEGORIA</b> : <b>MODIFICAR CATEGORIA</b>}
            </h3>
            <div className="card-body">
              {openModal===true?<EditCategoryForm/> :<CategoryForm />}
            </div>
          </>
        )}

      </div>
      <div className="card">
        <CategoryList/>
      </div>
    </div>
  )
}