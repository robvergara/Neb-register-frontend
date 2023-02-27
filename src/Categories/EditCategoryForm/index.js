import React from "react";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
import { StateContext } from "../../contexts/statesContext";
import { genders } from "../CategoryForm";

export function EditCategoryForm(){
  const {
    categoryHandleChangeModified,
    onUpdateCategory, 
    modifiedCategory,
  } = React.useContext(CategoryContext);
  // console.log(modifiedCategory)
  const{onCancelModal} = React.useContext(ModalContext);

  const {state} = React.useContext(StateContext);
  const {entrenadores} = React.useContext(CoachContext);

  const update=(e)=>{
    e.preventDefault()
    onUpdateCategory(modifiedCategory._id, modifiedCategory);
    setTimeout(() => {
      onCancelModal();
      window.location.reload(true);
    }, 1000);
  }

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

      <form onSubmit={update}>
        <div className="row">
          <div className="col-6 col-md-4 mb-3">
            <input className="form-control" placeholder="nombre" value={modifiedCategory.nombre} name = "nombre" onChange={categoryHandleChangeModified}/>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <input className="form-control" placeholder="edad" value={modifiedCategory.edad} name = "edad" onChange={categoryHandleChangeModified}/>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <select className="form-select" name="genero" onChange={categoryHandleChangeModified}>
              <option defaultValue>Sexo</option>
              {genders.map(gender => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <select className="form-select" name="entrenador_id" onChange={categoryHandleChangeModified}>
              <option defaultValue>entrenador(opcional)</option>
              {entrenadores.map(entrenador => (
                <option key={entrenador._id} value={entrenador._id}>
                  {entrenador.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="row d-flex justify-content-center">
            <button className="col-4 col-md-2 mx-1 btn btn-success" type="submit">Guardar cambios</button>
            <button className="col-4 col-md-2 mx-1 btn btn-danger" onClick={onCancelModal}><i class="fa-solid fa-trash"></i> Cancelar</button>
          </div>
        </div>

      </form>
    </>
  )
}