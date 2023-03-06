import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { PaymentContext } from "../contexts/paymentscontext";
import { StateContext } from "../contexts/statesContext";
import {months} from "../Payment/PaymentPage/index"

export function PaymentsList(){
  const {payments, setdataPayment, estudianteQuePago} = React.useContext(PaymentContext);
  const auth = useAuth();
  const {state} = React.useContext(StateContext);
  // const studentDataPayment = {estudiante_id: estudianteQuePago._id, cedula: estudianteQuePago.cedula}
  console.log(payments)
  console.log(estudianteQuePago)
  // console.log(payments?.message)

  if (state.error){
    return (
      <>
        {/* <h1 className="alert alert-danger">{payments.message}</h1> */}
        <h1 className="alert alert-danger">No se registran pagos</h1>
      </>
    )
  }

  return(
    <>
      {payments.length >= 1 && (
        <div className="m-auto px-4 py-3 bg-light rounded shadow">
          <table className="table table-striped caption-top mb-2">
            <caption>
                <div className="d-flex justify-content-between">
                  Pagos realizados por {estudianteQuePago.nombre} {estudianteQuePago.apellido}
                  {(!!auth.user?.token && auth.user?.status === 1) &&
                  <div className="col-sm-3 btn-group">
                    <NavLink className="btn btn-success" to={"/pagos"} onClick={()=>setdataPayment(estudianteQuePago)}> 
                    <i className="fa-solid fa-dollar-sign"></i> <b>PAGAR</b> 
                    </NavLink>  
                  </div>}
                </div>
            </caption>
    
            <thead>
              <tr>
                <th scope="col" className="text-center">MES</th>
                <th scope="col" className="text-center">AÑO</th>
                <th scope="col" className="text-center">VALOR</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment=> 
                <tr key={payment._id}>
                  <th scope="row" className="text-center">{months[payment.mes].name}</th>
                  <td className="text-center">{payment.ano}</td>
                  <td className="text-center">{payment.valor}</td>
                </tr>  
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );

}