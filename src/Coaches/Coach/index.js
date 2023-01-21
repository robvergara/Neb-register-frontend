import React from "react";
import { useAuth } from "../../contexts/auth";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
// import { entrenadores } from "../../entrenadores";

export function Coach({entrenador}){
  const {onDelete} = React.useContext(CoachContext)
  const {setOpenModal, setCoachId} = React.useContext(ModalContext);
  const auth = useAuth();
  // console.log(entrenadores)

  return(
    <>
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{entrenador.nombre} {entrenador.apellido}</h5>
          <div>
            {!!auth.user && (
            <div className="btn-group">
              <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setCoachId(entrenador._id)}}>editar</button>
              <button className="btn btn-primary" onClick={()=>onDelete(entrenador._id)}>eliminar</button>
            </div>
            )}
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            <b>CC: </b>{entrenador.cedula}
          </li>
        </ul>
      </div>        
    </>
  )
}