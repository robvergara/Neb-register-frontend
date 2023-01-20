import React from "react";
import { StateContext } from "../../contexts/statesContext";
import { StudentContext } from "../../contexts/studentContext";

export function StudentForm(){
  const { studentHandleChange, onSubmit, studentData, onCLeanStudentField } = React.useContext(StudentContext);
  const {state}= React.useContext(StateContext);

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
        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="nombre"
            value={studentData.nombre}
            onChange = {studentHandleChange}
            name = "nombre"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="apellido"
            value={studentData.apellido}
            onChange = {studentHandleChange}
            name = "apellido"
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="cedula"
            value={studentData.cedula}
            onChange = {studentHandleChange}
            name = "cedula"
          />
        </div>

        <div className="input-group mb-3">
          <input 
              className="form-control" 
              placeholder="edad"
              value={studentData.edad}
              onChange = {studentHandleChange}
              name = "edad"
            />
        </div>

        <div className="input-group mb-3">
          <label>fecha de nacimiento</label>
          <input 
              className="form-control" 
              type="date"
              value={studentData.nacimiento}
              onChange = {studentHandleChange}
              name = "nacimiento"
            />
        </div>

        <div className="input-group mb-3">
          <input 
              className="form-control" 
              placeholder="email"
              type="email"
              value={studentData.email}
              onChange = {studentHandleChange}
              name = "email"
            />
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
            onClick={onCLeanStudentField}
          >
            limpiar
          </button>

        </div>

      </form>
    </>
  )
}