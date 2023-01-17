import React from "react";

export function CategoryItem({categorie, categories, setCategories,onConfirm, state, onCancel}){
  const onDelete=(id)=>{
      const newList = categories.filter(category => (category.id !== id));
      setCategories(newList);
  }

  return(
    <>
    {(!!state.confirm) &&
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
    }

    <div className="card-body">
      <div className="list-group">
        <h5 className="mb-1">{categorie.name} - {categorie.gender}</h5>
        <div className="btn-group">
          <button className="btn btn-primary">editar</button>
          <button className="btn btn-primary" onClick={onConfirm}>
            eliminar
          </button>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            <b>Edad: {categorie.age}</b>
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>Entrenador: {(!categorie.coach? 'no hay entrenador asignado' :categorie.coach)}</b>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}