import React from "react";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
import { StateContext } from "../../contexts/statesContext";


// const initialTrainerState = { nombre:'robert', apellido:'vergara', cedula:'123456789', status:0 };

export function EditCoachForm(){
  const {
    handleChangeModified,
    onUpdate, 
    modifiedCoach,
  } = React.useContext(CoachContext);

  const {state} = React.useContext(StateContext);

  const{
    onCancelModal, 
    coachId
  } = React.useContext(ModalContext);

  // const list = [...entrenadores];
  // const coachToUpdate = list.find(entrenador=> entrenador._id === coachId);
  // setModifiedCoach(coachToUpdate);

  const update=(e)=>{
    e.preventDefault()
    onUpdate(coachId,modifiedCoach);
    // console.log(coachId,modifiedCoach);
    setTimeout(() => {
      onCancelModal();
      window.location.reload(true);
    }, 1000);
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