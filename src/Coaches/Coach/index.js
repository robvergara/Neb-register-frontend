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
      <div className="col-12 col-lg-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-3">
              <b>
                <NavLink 
                className="nav-link active col-sm7 col-md-6 mb-1 ms-2 title-card" 
                to={`/entrenadores/${entrenador._id}`}>
                  {entrenador.nombre} {entrenador.apellido}
                </NavLink>
              </b>
            </h3>
            <p className="ps-2"><b>CC: </b>{entrenador.cedula}</p>
          </div>
          <div className="card-footer d-flex">
            <button className="col-6 col-lg-6  me-1 mb-1 btn btn-primary" onClick={()=>{setOpenModal(true); setModifiedCoach(entrenador)}}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className="col-6 col-lg-6  me-1 mb-1 btn btn-danger" onClick={()=>onDelete(entrenador._id)}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}