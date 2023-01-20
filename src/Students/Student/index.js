import React from "react";
import {StudentContext} from "../../contexts/studentContext"
import {ModalContext} from "../../contexts/modalContext"

export function Student({estudiante}){
  const {onDelete}= React.useContext(StudentContext);
  const {setOpenModal, setStudentId}= React.useContext(ModalContext);
  // console.log(estudiante)
  return(
    <>
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{estudiante.nombre} {estudiante.apellido}</h5>
          <div>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setStudentId(estudiante._id)}}>editar</button>
              <button className="btn btn-primary" onClick={()=>onDelete(estudiante._id)}>eliminar</button>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            <b>CC: </b>{estudiante.cedula}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>edad: </b>{estudiante.edad}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>email: </b>{estudiante.email}
          </li>
        </ul>
      </div>   
    </>
  )
}