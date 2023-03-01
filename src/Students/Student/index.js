import React from "react";
import "./Student.css"
import {StudentContext} from "../../contexts/studentContext"
import {ModalContext} from "../../contexts/modalContext"
import { useAuth } from "../../contexts/auth";
import { NavLink } from "react-router-dom";
import { PaymentContext } from "../../contexts/paymentscontext";
import { getCategory } from "../../services/categories.services";

export function Student({estudiante}){
  const {onDelete, setModifiedStudent}= React.useContext(StudentContext);
  const {setOpenModal}= React.useContext(ModalContext);
  const {setdataPayment} = React.useContext(PaymentContext);
  const auth = useAuth();
  const [categoria, setCategoria] = React.useState({})

  const studentDataPayment = {estudiante_id: estudiante._id, cedula: estudiante.cedula}
  const categoria_id = estudiante.categoria_id;

  React.useEffect(()=>{
    async function obtenerCategoria(){
      try {
        if(categoria_id !== undefined){
          const category = await getCategory(categoria_id);
          // console.log(category[0]);
          setCategoria(category[0]);
        }
      } catch (error) {
        console.log(error)
      }
    }

    obtenerCategoria()
  },[categoria_id])

  return(
    <>
      <div className="col-12 col-lg-4 mb-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title m-auto mb-3"><b>{estudiante.nombre} {estudiante.apellido}</b></h4>
            <p className="card-text m-auto"><u><b>CC:</b></u> {estudiante.cedula}</p>
            <p className="card-text m-auto"><u><b>Edad:</b></u> {estudiante.edad}</p>
            <p className="card-text m-auto"><u><b>Email:</b></u> {estudiante.email}</p>
            <p className="card-text m-auto"><u><b>Categoria:</b></u> {categoria.nombre} - {categoria.genero}</p>
          </div>
          <div className="card-footer d-flex">
            <button className="col-4 col-lg-4  me-1 mb-1 btn btn-primary" onClick={()=>{setOpenModal(true); setModifiedStudent(estudiante)}}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className="col-4 col-lg-4  me-1 mb-1 btn btn-danger" onClick={()=>onDelete(estudiante._id)}><i className="fa-solid fa-trash"></i></button>
            <NavLink className="col-4 col-lg-4  mb-1 btn btn-success" to={'/pagos'} onClick={()=>setdataPayment(studentDataPayment)}><i className="fa-solid fa-dollar-sign"></i></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}