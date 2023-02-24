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
        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="nombre"
            value={categoriesData.nombre}
            name = "nombre"
            onChange={categoryHandleChange}
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="edad"
            value={categoriesData.edad}
            name = "edad"
            onChange={categoryHandleChange}
          />

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
        
        <div className="input-group mb-3">

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

        <div className="input-group">
          <button className="btn btn-primary" type="submit">GUARDAR</button>
          <button className="btn btn-primary" onClick={onCLeanCategory}>LIMPIAR</button>
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

