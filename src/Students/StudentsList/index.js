import React from "react";
import {StudentContext} from "../../contexts/studentContext";
import {Student} from "../Student"

export function StudentsList(){
  const {searchedStudents}= React.useContext(StudentContext);
  const estudiantes = searchedStudents;

  return(
    <>
      <h3 className="card-header">
        <b>LISTA DE ESTUDIANTES</b>
      </h3>

      {(!estudiantes || estudiantes.length === 0) && (
        <div className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">No hay estudiantes</h5>
          </div>
      </div>
      )}
      
      <div className="card-body">
        <div className="list-group">
          {estudiantes.map(estudiante => (
            <Student 
              key={estudiante.cedula} 
              estudiante = {estudiante} 
            />
          ))}
        </div>
      </div>
    </>
  )
}