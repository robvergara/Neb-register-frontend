import React from "react";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";

export function CategoryItem({category}){
  const {onDeleteCategory} = React.useContext(CategoryContext)
  const {setOpenModal, setCategoryId} = React.useContext(ModalContext);
  const {entrenadores} = React.useContext(CoachContext);

  const entrenador = entrenadores.find(entrenador=> entrenador._id === category.entrenador_id);

  return(
    <>
    {/* {(!!state.confirm) &&
      (
        <>
          <h5>seguro que deseas eliminar la categoria?</h5>
          <div className="d-grid gap-2 d-md-block">          
            <button 
            className="btn btn-danger" 
            onClick={()=>onDelete(categorie.id)}>
              eliminar
            </button>
            <button className="btn btn-danger" onClick={onCancel}>cancelar</button>
          </div>
        </>
      )
    } */}

    <div className="card-body">
      <div className="list-group">
        <h5 className="mb-1">{category.nombre} - {category.genero}</h5>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setCategoryId(category._id)}}>editar</button>
          <button className="btn btn-primary" onClick={()=>onDeleteCategory(category._id)}>eliminar</button>
        </div>
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