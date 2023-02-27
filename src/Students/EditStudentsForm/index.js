import React from "react";
import { StudentContext } from "../../contexts/studentContext";
import { ModalContext } from "../../contexts/modalContext";
import { StateContext } from "../../contexts/statesContext";
import { CategoryContext } from "../../contexts/categorycontext";

export function EditStudentsForm(){
  const {handleChangeModified, onUpdate, modifiedStudent} = React.useContext(StudentContext);
  const {state} = React.useContext(StateContext);
  const {onCancelModal} = React.useContext(ModalContext);
  const {categories} = React.useContext(CategoryContext);
  
  const update=(e)=>{
    e.preventDefault()
    console.log(modifiedStudent)
    onUpdate(modifiedStudent._id,modifiedStudent);
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
          <div className="mb-3 col-12 col-md-4">
            <input className="form-control" placeholder="nombre" value={modifiedStudent.nombre} onChange = {handleChangeModified} name = "nombre"/>
          </div>
          <div className="mb-3 col-12 col-md-4">
            <input className="form-control" placeholder="apellido" value={modifiedStudent.apellido} onChange = {handleChangeModified} name = "apellido"/>
          </div>
          <div className="mb-3 col-12 col-md-4">
            <input className="form-control" placeholder="cedula" value={modifiedStudent.cedula} onChange = {handleChangeModified} name = "cedula"/>
          </div>
          <div className="mb-3 col-12 col-md-4">
            <input className="form-control" placeholder="edad" value={modifiedStudent.edad} onChange = {handleChangeModified} name = "edad"/>
          </div>
          <div className="mb-3 col-12 col-md-4">
            <select className="form-select" name="categoria_id" onChange={handleChangeModified} placeholder="categoria">
              <option defaultValue>categoria</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.nombre} - {category.genero}: {category.edad} años
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 col-12 col-md-4">
            <input className="form-control" placeholder="email" type="email" value={modifiedStudent.email} onChange = {handleChangeModified} name = "email"/>
          </div>
          <div className="row d-flex justify-content-center">
            <button className="col-4 col-md-2 mx-1 btn btn-primary" type="submit">modificar estudiante</button>
            <button className="col-4 col-md-2 mx-1 btn btn-primary" onClick={onCancelModal}>cancelar</button>
          </div>
        </div>

      </form>
    </>
  )
}