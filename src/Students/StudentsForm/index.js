import React from "react";
import { StateContext } from "../../contexts/statesContext";
import { StudentContext } from "../../contexts/studentContext";
import { CategoryContext } from "../../contexts/categorycontext";

export function StudentForm(){
  const { studentHandleChange, onSubmit, studentData, onCLeanStudentField } = React.useContext(StudentContext);
  const {state}= React.useContext(StateContext);
  const {categories} = React.useContext(CategoryContext);

  return(
    <>
      {(state.error) && (
        <h5 className="alert alert-danger">
          EL ESTUDIANTE YA EXISTE
        </h5>
      )}
      {(state.success) && (
        <h5 className="alert alert-success">
          El estudiante fue guardado correctamente!
        </h5>
      )}

      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-xl-10 col-12">
            <div className="row">
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="nombre" value={studentData.nombre} onChange = {studentHandleChange} name = "nombre" required = {true}/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="apellido" value={studentData.apellido} onChange = {studentHandleChange} name = "apellido" required = {true}/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="cedula" value={studentData.cedula} onChange = {studentHandleChange} name = "cedula" required = {true}/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="edad" value={studentData.edad} onChange = {studentHandleChange} name = "edad" required = {true}/>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <select className="form-select" name="categoria_id" onChange={studentHandleChange} placeholder="categoria" required>
                  <option defaultValue value={null}>categoria</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.nombre} - {category.genero}: {category.edad} años
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 m-auto px-2 my-2 d-flex justify-content-center">
                <input className="form-control" placeholder="email" type="email" value={studentData.email} onChange = {studentHandleChange} name = "email" required = {true}/>
              </div>
              
            </div>
          </div>
          <div className="col-xl-2 col-12 d-flex justify-content-center">
            <div className="px-2 my-2 d-flex justify-content-center">
              <button className="mx-1 btn btn-primary" type="submit" ><i class="fa-solid fa-floppy-disk"></i> Guardar</button>
            </div>
            <div className="px-2 my-2 d-flex justify-content-center">
              <button className="mx-1 btn btn-danger" onClick={onCLeanStudentField}><i class="fa-solid fa-trash"></i> Limpiar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}