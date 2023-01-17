import React from "react";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
import { StateContext } from "../../contexts/statesContext";


// const initialTrainerState = { nombre:'robert', apellido:'vergara', cedula:'123456789', status:0 };

export function EditCoachForm(){
  const {entrenadores, handleChangeModified, onUpdate, modifiedCoach, setModifiedCoach } = React.useContext(CoachContext)
  // console.log(entrenadores)
  const {state} = React.useContext(StateContext)
  const{onCancelModal, coachId} = React.useContext(ModalContext)

  const update=()=>{
    // setModifiedCoach(entrenadores.find(entrenador=> entrenador._id === coachId));
    onUpdate(coachId,modifiedCoach);
  }
  

  return(
    <>
      {(state.error) && (
          <h5 className="alert alert-danger">
            EL ENTRENADOR YA EXISTE
          </h5>
      )}
      {(state.success) && (
          <h5 className="alert alert-success">
            El entrenador fue modificado correctamente!
          </h5>
      )}

      <form onSubmit={update}>
        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="nombre"
            value={modifiedCoach.nombre}
            onChange = {handleChangeModified}
            name = "nombre"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="apellido"
            value={modifiedCoach.apellido}
            onChange = {handleChangeModified}
            name = "apellido"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="cedula"
            value={modifiedCoach.cedula}
            onChange = {handleChangeModified}
            name = "cedula"
          />
        </div>

        <div className="input-group mb-3">
        <select 
            className="form-select"
            name="status"
            onChange={handleChangeModified}
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
            guardar cambios
          </button>

          <button
            className="btn btn-primary"
            onClick={onCancelModal}
          >
            cancelar
          </button>

        </div>

      </form>
    </>
  )
}