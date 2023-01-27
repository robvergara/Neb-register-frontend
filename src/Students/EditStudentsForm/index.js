import React from "react";
import { StudentContext } from "../../contexts/studentContext";
import { ModalContext } from "../../contexts/modalContext";
import { StateContext } from "../../contexts/statesContext";
import { CategoryContext } from "../../contexts/categorycontext";

export function EditStudentsForm(){
  const {handleChangeModified, onUpdate, modifiedStudent, onCLeanStudentField} = React.useContext(StudentContext);
  const {state} = React.useContext(StateContext);
  const {onCancelModal, studentId} = React.useContext(ModalContext);
  const {categories} = React.useContext(CategoryContext);

  const update=(e)=>{
    e.preventDefault()
    onUpdate(studentId,modifiedStudent);
    // console.log(studentId,modifiedStudent;
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
            value={modifiedStudent.nombre}
            onChange = {handleChangeModified}
            name = "nombre"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="apellido"
            value={modifiedStudent.apellido}
            onChange = {handleChangeModified}
            name = "apellido"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="cedula"
            value={modifiedStudent.cedula}
            onChange = {handleChangeModified}
            name = "cedula"
          />
        </div>

        <div className="input-group mb-3">
          <input 
              className="form-control" 
              placeholder="edad"
              value={modifiedStudent.edad}
              onChange = {handleChangeModified}
              name = "edad"
            />
        </div>

        <div className="input-group mb-3">
        <select
            className="form-select"
            name="categoria_id"
            onChange={handleChangeModified}
            placeholder="categoria"
          >
            <option
              defaultValue
            >
              categoria
            </option>
            {categories.map(category => (
              <option 
                key={category._id}
                value={category._id}
              >
                {category.nombre} - {category.genero}: {category.edad} años
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <input 
              className="form-control" 
              placeholder="email"
              type="email"
              value={modifiedStudent.email}
              onChange = {handleChangeModified}
              name = "email"
            />
        </div>

        <div className="input-group">

          <button 
            className="btn btn-primary"
            type="submit"
            onClick={onCLeanStudentField}
          >
              modificar estudiante
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