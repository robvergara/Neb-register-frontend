import React from "react";
import "./CategoryItem.css"
import { useAuth } from "../../contexts/auth";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
import { getStudents } from "../../services/students.services";

export function CategoryItem({category}){
  const {onDeleteCategory, setModifiedCategory} = React.useContext(CategoryContext)
  const {setOpenModal} = React.useContext(ModalContext);
  const {entrenadores} = React.useContext(CoachContext);
  const auth = useAuth()
  const [estudiantes, setEstudiantes] = React.useState(0);
  const entrenador = entrenadores.find(entrenador=> entrenador._id === category.entrenador_id);
  // console.log(category)

  React.useEffect(()=>{
    async function obtenerEstudiantes(){
      const studentList = await getStudents();
      const studentListFiltered = studentList.filter(student=> student.categoria_id === category._id);
      setEstudiantes(studentListFiltered.length);
    }
    obtenerEstudiantes()
  },[category])

  return(
    <>
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <h5 className="col-sm7 col-md-6 mb-1 ms-2 title-card">{category.nombre} - {category.genero}</h5>

          {auth.user.status === 1 && (
            <>
              <div className="col-12 col-md-4 d-flex action-buttons">
                <button className="col-5 col-sm-6 col-lg-4  me-1 mb-1 btn btn-primary" onClick={()=>{setOpenModal(true); setModifiedCategory(category)}}>editar</button>
                <button className="col-5 col-sm-6 col-lg-4  mb-1 btn btn-primary" onClick={()=>onDeleteCategory(category._id)}>eliminar</button>
              </div>
            </>
          )}
        </div>
        <div className="card">
          <div className="list-group">
            
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">
                <b>Edad: {category.edad}</b>
              </li>
              <li className="list-group-item ">
                <b>Entrenador: {(!entrenador? 'no hay entrenador asignado' :entrenador.nombre)}</b>
              </li>
              <li className="list-group-item ">
                <b>Cantidad de estudiantes: {(estudiantes === 0? 'no hay estudiantes inscritos' :estudiantes)}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}