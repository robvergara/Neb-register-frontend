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
          EL ESTUDIANTE YA EXISTE
        </h5>
      )}
      {(state.success) && (
        <h5 className="alert alert-success">
          El estudiante fue modificado correctamente!
        </h5>
      )}
  
      <form onSubmit={update}>
        <div className="row">
          <div className="col-xl-10 col-12">
            <div className="row">
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="nombre" value={modifiedStudent.nombre} onChange = {handleChangeModified} name = "nombre"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="apellido" value={modifiedStudent.apellido} onChange = {handleChangeModified} name = "apellido"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="cedula" value={modifiedStudent.cedula} onChange = {handleChangeModified} name = "cedula"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="edad" value={modifiedStudent.edad} onChange = {handleChangeModified} name = "edad"/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <select className="form-select" name="categoria_id" onChange={handleChangeModified} placeholder="categoria">
                  <option defaultValue>categoria</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.nombre} - {category.genero}: {category.edad} años
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="email" type="email" value={modifiedStudent.email} onChange = {handleChangeModified} name = "email"/>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-12 d-flex justify-content-center">
            <div className="p-1 d-flex justify-content-center">
              <button className="btn btn-primary" type="submit"><i className="fa-solid fa-floppy-disk"></i> Modificar</button>
            </div>
            <div className="p-1 d-flex justify-content-center">
              <button className="btn btn-danger" onClick={onCancelModal}><i className="fa-solid fa-trash"></i> Cancelar</button>
            </div>
          </div>

        </div>

      </form>
    </>
  )
}