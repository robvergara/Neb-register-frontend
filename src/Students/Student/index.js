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
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <h5 className="col-sm-12 col-md-5 mb-1 ms-2 title-card">{estudiante.nombre} {estudiante.apellido}</h5>
        
            {!!auth.user && (
            <div className="col-12 col-md-6 d-flex action-buttons">
              <button className="col-4 col-lg-4  me-1 mb-1 btn btn-primary" onClick={()=>{setOpenModal(true); setModifiedStudent(estudiante)}}>editar</button>
              <button className="col-4 col-lg-4  me-1 mb-1 btn btn-primary" onClick={()=>onDelete(estudiante._id)}>eliminar</button>
              <NavLink className="col-4 col-lg-4  mb-1 btn btn-primary" to={'/pagos'} onClick={()=>setdataPayment(studentDataPayment)} >Realizar pago</NavLink>
            </div>
            )}

        </div>

        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>CC: </b>{estudiante.cedula}
            </li>
            <li className="list-group-item">
              <b>edad: </b>{estudiante.edad}
            </li>
            <li className="list-group-item">
              <b>email: </b>{estudiante.email}
            </li>
            <li className="list-group-item">
              <b>categoria: </b>{categoria.nombre} - {categoria.genero}
            </li>
          </ul>
        </div>
      </div>   
    </>
  )
}