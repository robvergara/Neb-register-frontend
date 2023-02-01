import React from "react";
import { useAuth } from "../../contexts/auth";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";

export function CategoryItem({category}){
  const {onDeleteCategory} = React.useContext(CategoryContext)
  const {setOpenModal, setCategoryId} = React.useContext(ModalContext);
  const {entrenadores} = React.useContext(CoachContext);
  const auth = useAuth()
  const entrenador = entrenadores.find(entrenador=> entrenador._id === category.entrenador_id);

  return(
    <>
      <div className="card-body">
        <div className="list-group">
          <h5 className="mb-1">{category.nombre} - {category.genero}</h5>

          {auth.user.status === 1 && (
            <>
              <div className="btn-group">
                <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setCategoryId(category._id)}}>editar</button>
                <button className="btn btn-primary" onClick={()=>onDeleteCategory(category._id)}>eliminar</button>
              </div>
            </>
          )}
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-dark">
              <b>Edad: {category.edad}</b>
            </li>
            <li className="list-group-item list-group-item-dark">
              <b>Entrenador: {(!entrenador? 'no hay entrenador asignado' :entrenador.nombre)}</b>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}