import React from "react";
import { CoachContext } from "../../contexts/coachContext";
import { StateContext } from "../../contexts/statesContext";
// import { createEntrenador } from "../../services/entrenadores.services";
// import { entrenadores } from "../../entrenadores";



export function CoachForm(){

  const { handleChange, onSubmit, coachData, onCLean} = React.useContext(CoachContext)
  const {state} = React.useContext(StateContext)



  return(
    <>
      {(state.error) && (
          <h5 className="alert alert-danger">
            EL ENTRENADOR YA EXISTE
          </h5>
      )}
      {(state.success) && (
          <h5 className="alert alert-success">
            El entrenador fue guardado correctamente!
          </h5>
      )}

      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="mb-3 col-12 col-md-4">
            <input 
              className="form-control" 
              placeholder="nombre"
              value={coachData.nombre}
              onChange = {handleChange}
              name = "nombre"
            />
          </div>

          <div className="mb-3 col-12 col-md-4">
            <input 
              className="form-control" 
              placeholder="apellido"
              value={coachData.apellido}
              onChange = {handleChange}
              name = "apellido"
            />
          </div>

          <div className="mb-3 col-12 col-md-4">
            <input 
              className="form-control" 
              placeholder="cedula"
              value={coachData.cedula}
              onChange = {handleChange}
              name = "cedula"
            />
          </div>

          <div className="row d-flex justify-content-center">

            <button 
              className="col-4 col-md-2 mx-1 btn btn-primary"
              type="submit"
            >
                guardar
            </button>

            <button
              className="col-4 col-md-2 mx-1 btn btn-primary"
              onClick={onCLean}
            >
              limpiar
            </button>

          </div>
        </div>

      </form>
    </>
  )
}