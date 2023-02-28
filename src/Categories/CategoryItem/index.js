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
      <div className="col-12 col-lg-4 mb-2">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title m-auto mb-3"><b>{category.nombre} - {category.genero}</b></h4>
            <p className="card-text m-auto"><u><b>Entrenador:</b></u> {(!entrenador? 'no hay entrenador asignado' :entrenador.nombre)}</p>
            <p className="card-text m-auto"><u><b>Edad:</b></u> {category.edad}</p>
          </div>
          <div className="card-footer d-flex">
            <p className="col-6 text-muted flex-fill m-auto"><b>Estudiantes</b> {(estudiantes === 0? 'no hay estudiantes inscritos' :estudiantes)}</p>
              {auth.user.status === 1 && (
                <>
                  <button className="col-3 m-1 p-2 btn btn-primary flex-fill" onClick={()=>{setOpenModal(true); setModifiedCategory(category)}}><i className="fa-solid fa-pen-to-square"></i></button>
                  <button className="col-3 m-1  p-2 btn btn-danger flex-fill" onClick={()=>onDeleteCategory(category._id)}><i className="fa-solid fa-trash"></i></button>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  )
}