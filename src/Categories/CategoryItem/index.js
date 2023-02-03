import React from "react";
import { useAuth } from "../../contexts/auth";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { ModalContext } from "../../contexts/modalContext";
import { getStudents } from "../../services/students.services";

export function CategoryItem({category}){
  const {onDeleteCategory} = React.useContext(CategoryContext)
  const {setOpenModal, setCategoryId} = React.useContext(ModalContext);
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
  },[])

  return(
    <>
      <div className="card-body">
        <div className="list-group">
          <h5 className="mb-1">{category.nombre} - {category.genero}</h5>

          {auth.user.status === 1 && (
            <>
              <div className="btn-group">
                <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setCategoryId(category._id)}}>editar</button>
                <button className="btn btn-primary" onClick={()=>onDeleteCategory(category._id)}>eliminar</button>
              </div>
            </>
          )}
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-dark">
              <b>Edad: {category.edad}</b>
            </li>
            <li className="list-group-item list-group-item-dark">
              <b>Entrenador: {(!entrenador? 'no hay entrenador asignado' :entrenador.nombre)}</b>
            </li>
            <li className="list-group-item list-group-item-dark">
              <b>Cantidad de estudiantes: {(estudiantes === 0? 'no hay estudiantes inscritos' :estudiantes)}</b>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}