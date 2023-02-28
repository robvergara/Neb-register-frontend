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

  const{onCancelModal} = React.useContext(ModalContext);

  const update=(e)=>{
    e.preventDefault()
    onUpdate(modifiedCoach._id,modifiedCoach);
    // console.log(modifiedCoach);
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
        <div className="row">
          <div className="col-xl-10 col-12 m-auto">
            <div className="row m-auto d-flex justify-content-center">
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="nombre" value={modifiedCoach.nombre} onChange = {handleChangeModified} name = "nombre"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="apellido" value={modifiedCoach.apellido} onChange = {handleChangeModified} name = "apellido"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="cedula" value={modifiedCoach.cedula} onChange = {handleChangeModified} name = "cedula"/>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-12 d-flex justify-content-center">
            <div className="px-1 my-1 d-flex justify-content-center">
              <button className="btn btn-primary" type="submit"><i class="fa-solid fa-floppy-disk"></i> Guardar cambios</button>
            </div>
            <div className="px-1 my-1 d-flex justify-content-center">
              <button className="btn btn-danger" onClick={onCancelModal}><i class="fa-solid fa-trash"></i>Cancelar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}