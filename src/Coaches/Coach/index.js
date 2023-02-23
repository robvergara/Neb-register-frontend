import React from "react";
import "./Coach.css"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
// import { entrenadores } from "../../entrenadores";

export function Coach({entrenador}){
  const {onDelete, setModifiedCoach} = React.useContext(CoachContext)
  const {setOpenModal} = React.useContext(ModalContext);
  const auth = useAuth();
  // console.log(entrenadores)

  return(
    <>
      <div className="list-group-item">
        <div className="row d-flex justify-content-between">
          <NavLink 
            className="nav-link active col-sm7 col-md-6 mb-1 ms-2 title-card" 
            to={`/entrenadores/${entrenador._id}`}>
              {entrenador.nombre} {entrenador.apellido}
          </NavLink>

            {!!auth.user && (
            <div className="col-12 col-md-4 d-flex action-buttons">
              <button className="col-5 col-sm-6 col-lg-4  me-1 mb-1 btn btn-primary" onClick={()=>{setOpenModal(true); setModifiedCoach(entrenador)}}>editar</button>
              <button className="col-5 col-sm-6 col-lg-4  me-1 mb-1 btn btn-primary" onClick={()=>onDelete(entrenador._id)}>eliminar</button>
            </div>
            )}

        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex">
            <b>CC: </b>{entrenador.cedula}
          </li>
        </ul>
      </div>        
    </>
  )
}