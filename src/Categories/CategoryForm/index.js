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
        <div className="row">
          <div className="mb-3 col-12 col-md-4">
            <input 
              className="form-control" 
              placeholder="nombre"
              value={categoriesData.nombre}
              name = "nombre"
              onChange={categoryHandleChange}
            />
          </div>

          <div className="col-12 col-md-4 mb-3">
            <input 
              className="form-control" 
              placeholder="edad"
              value={categoriesData.edad}
              name = "edad"
              onChange={categoryHandleChange}
            />

          </div>
          <div className="col-12 col-md-4 mb-3">            
            <select 
              className="form-select"
              name="genero"
              onChange={categoryHandleChange}
            >
              <option defaultValue>Sexo</option>
              {genders.map(gender => (
                <option 
                  key={gender}
                  value={gender}
                >
                  {gender}
                </option>
              ))
              }
            </select>
          </div>
          
          <div className="col-12 col-md-4 mb-3">

            <select 
              className="form-select"
              name="entrenador_id"
              onChange={categoryHandleChange}
            >
              <option 
                defaultValue>
                entrenador(opcional)
              </option>

              {entrenadores.map(entrenador => (
                <option 
                  key={entrenador._id}
                  value={entrenador._id}
                >
                  {entrenador.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="row d-flex justify-content-center">
            <button 
              className="col-4 col-md-2 mx-1 btn btn-primary"
              type="submit"
            >guardar</button>

            <button 
              className="col-4 col-md-2 mx-1 btn btn-primary"
              onClick={onCLeanCategory}
            >
              limpiar
            </button>
          </div>
        </div>



      </form>
    </>
  )
}


export const genders = [
  'masculino',
  'femenino',
  'mixto'
];

