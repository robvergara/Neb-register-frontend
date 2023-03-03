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
          <div className="col-xl-10 col-12 m-auto">
            <div className="row m-auto d-flex justify-content-center">
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="nombre" value={coachData.nombre} onChange = {handleChange} name = "nombre"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="apellido" value={coachData.apellido} onChange = {handleChange} name = "apellido"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="cedula" value={coachData.cedula} onChange = {handleChange} name = "cedula"/>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-12 d-flex justify-content-center">
            <div className="px-1 my-1 d-flex justify-content-center">
              <button className="btn btn-primary" type="submit"><i className="fa-solid fa-floppy-disk"></i> Guardar</button>
            </div>
            <div className="px-1 my-1 d-flex justify-content-center">
              <button className="btn btn-warning" onClick={onCLean}><i className="fa-solid fa-broom"></i> Limpiar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}