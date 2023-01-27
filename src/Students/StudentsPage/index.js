import React from "react";
import { useAuth } from "../../contexts/auth";
import { ModalContext } from "../../contexts/modalContext";
import { EditStudentsForm } from "../EditStudentsForm";
import { StudentSearch } from "../StudentSearch";
import { StudentForm } from "../StudentsForm";
import { StudentsList } from "../StudentsList";

export function StudentsPage(){
  const {openModal} = React.useContext(ModalContext);
  const auth = useAuth();
  // console.log(auth)
  return(
    <div className="card mb-3">
      <StudentSearch/>
      {(!!auth.user && !!auth.user.token) && (
        <>
          <h3 className="card-header">
            {openModal!== true? <b>AGREGAR ESTUDIANTE</b> : <b>MODIFICAR CATEGORIA</b>}
          </h3>
          <div className="card-body">
            {/* <StudentForm/> */}
            {openModal===true?<EditStudentsForm/> :<StudentForm />}
          </div>
        </>
      )}

      <div className="card">
        <StudentsList/>
      </div>
  </div>
  )
}