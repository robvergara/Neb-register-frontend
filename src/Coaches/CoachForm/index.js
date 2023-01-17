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
        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="nombre"
            value={coachData.nombre}
            onChange = {handleChange}
            name = "nombre"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="apellido"
            value={coachData.apellido}
            onChange = {handleChange}
            name = "apellido"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="cedula"
            value={coachData.cedula}
            onChange = {handleChange}
            name = "cedula"
          />
        </div>

        <div className="input-group mb-3">
        <select 
            className="form-select"
            name="status"
            onChange={handleChange}
          >
            <option 
              defaultValue 
              key={3}>
                status
            </option>
              <option 
                key={1}
                value={1}>
                  Admin
              </option>
              <option 
                key={0}
                value={0}>
                  profesor
              </option>
            
            
          </select>
        </div>

        <div className="input-group">

          <button 
            className="btn btn-primary"
            type="submit"
          >
              guardar
          </button>

          <button
            className="btn btn-primary"
            onClick={onCLean}
          >
            limpiar
          </button>

        </div>

      </form>
    </>
  )
}