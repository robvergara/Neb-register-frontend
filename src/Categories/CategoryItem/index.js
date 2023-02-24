import React from "react";
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
        <div className="list-group">
          <h5 className="mb-1 ">{category.nombre} - {category.genero}</h5>
            <div className="row">
              <div className="col-8">
                <ul className="list-group list-group-flush rounded">
                  <li className="list-group-item list-group-item-dark">
                    <b>Edad:</b> {category.edad}
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <b>Entrenador:</b> {(!entrenador? 'no hay entrenador asignado' :entrenador.nombre)}
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <b>Estudiantes:</b> {(estudiantes === 0? 'no hay estudiantes inscritos' :estudiantes)}
                  </li>
                </ul>
              </div>
              <div className="col-2 btn-group">
                {auth.user.status === 1 && (
                  <>
                    <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setModifiedCategory(category)}}>editar</button>
                  </>
                )}
              </div>
              <div className="col-2 btn-group">
                {auth.user.status === 1 && (
                  <>
                    <button className="btn btn-primary" onClick={()=>onDeleteCategory(category._id)}>eliminar</button>
                  </>
                )}
              </div>              
              
            </div>
        </div>
      </div>
    </>
  )
}