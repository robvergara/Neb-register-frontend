import React from "react";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { StateContext } from "../../contexts/statesContext";
// import { entrenadores } from "../../entrenadores";


export function CategoryForm(){

  const { categoryHandleChange, onSubmitCategory, categoriesData, onCLeanCategory} = React.useContext(CategoryContext)
  const {state} = React.useContext(StateContext)
  const {entrenadores} = React.useContext(CoachContext);

  return(
    <>
      {(state.error) && (
          <h5 className="alert alert-danger">
            LA CATEGORIA YA EXISTE
          </h5>
      )}
      {(state.success) && (
          <h5 className="alert alert-success">
            La categoria fue guardada correctamente!
          </h5>
      )}

      <form onSubmit={onSubmitCategory}>
        <div className="row m-auto">
          <div className="col-4 col-md-4 m-auto">
            <input className="form-control align-middle" placeholder="nombre" value={categoriesData.nombre} name = "nombre" onChange={categoryHandleChange}/>
          </div>
          <div className="col-4 col-md-4 m-auto px-2 my-2">
            <input className="form-control" placeholder="edad" value={categoriesData.edad} name = "edad" onChange={categoryHandleChange}/>
          </div>
          <div className="col-4 col-md-4 m-auto px-2 my-2">            
            <select className="form-select" name="genero" onChange={categoryHandleChange}>
              <option defaultValue>Sexo</option>
              {genders.map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>
          <div className="col-4 col-md-4 m-auto px-2 my-2">
            <select className="form-select" name="entrenador_id" onChange={categoryHandleChange}>
              <option defaultValue>entrenador(opcional)</option>
              {entrenadores.map(entrenador => (
                <option key={entrenador._id} value={entrenador._id}>{entrenador.nombre}</option>
              ))}
            </select>
          </div>
          <div className="col-4 col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
            <button className="col-md btn btn-primary" type="submit"><i class="fa-solid fa-floppy-disk"></i>  Guardar</button>
          </div>
          <div className="col-4 col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
            <button className="col-md btn btn-primary" onClick={onCLeanCategory}><i class="fa-solid fa-trash"></i>  Limpiar</button>
          </div>
        </div>
      </form>
    </>
  )
}


export const genders = [
  'Masculino',
  'Femenino',
  'Mixto'
];

