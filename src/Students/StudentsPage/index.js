import React from "react";
import { useAuth } from "../../contexts/auth";
import { ModalContext } from "../../contexts/modalContext";
import { EditStudentsForm } from "../EditStudentsForm";
import { StudentForm } from "../StudentsForm";
import { StudentsList } from "../StudentsList";

export function StudentsPage(){
  const {openModal} = React.useContext(ModalContext);
  const auth = useAuth();
  return(
    <div className="card mb-3">
      {!!auth.user && (
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