import React from "react";
import {StudentContext} from "../../contexts/studentContext"
import {ModalContext} from "../../contexts/modalContext"
import { useAuth } from "../../contexts/auth";
import { NavLink } from "react-router-dom";
import { PaymentContext } from "../../contexts/paymentscontext";
import { getCategory } from "../../services/categories.services";

export function Student({estudiante}){
  const {onDelete}= React.useContext(StudentContext);
  const {setOpenModal, setStudentId}= React.useContext(ModalContext);
  const {setdataPayment} = React.useContext(PaymentContext);
  const auth = useAuth();
  const [categoria, setCategoria] = React.useState({})

  const studentDataPayment = {estudiante_id: estudiante._id, cedula: estudiante.cedula}
  // console.log(studentDataPayment)
  const categoria_id = estudiante.categoria_id;
  // console.log(categoria_id);

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
  },[])

  return(
    <>
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{estudiante.nombre} {estudiante.apellido}</h5>
          <div>

            {!!auth.user && (
            <div className="btn-group">
              <button className="btn btn-primary" onClick={()=>{setOpenModal(true); setStudentId(estudiante._id)}}>editar</button>
              <button className="btn btn-primary" onClick={()=>onDelete(estudiante._id)}>eliminar</button>
              {auth.user.status === 1 && (
                <NavLink className="btn btn-secondary active" to={'/pagos'} onClick={()=>setdataPayment(studentDataPayment)} >Realizar pago</NavLink>
              )}
            </div>
            )}
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            <b>CC: </b>{estudiante.cedula}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>edad: </b>{estudiante.edad}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>email: </b>{estudiante.email}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>categoria: </b>{categoria.nombre} - {categoria.genero}
          </li>
        </ul>
      </div>   
    </>
  )
}