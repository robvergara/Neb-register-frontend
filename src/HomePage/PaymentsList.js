import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { PaymentContext } from "../contexts/paymentscontext";
import { StateContext } from "../contexts/statesContext";

export function PaymentsList(){
  const {payments, setdataPayment, estudianteQuePago} = React.useContext(PaymentContext);
  const auth = useAuth();
  const {state} = React.useContext(StateContext);
  // const studentDataPayment = {estudiante_id: estudianteQuePago._id, cedula: estudianteQuePago.cedula}

  // console.log(estudianteQuePago)
  // console.log(payments?.message)

  if (state.error){
    return (
      <>
        <h1 className="alert alert-danger">{payments.message}</h1>
      </>
    )
  }

  return(
    <>
      {payments.length >= 1 && (
        <div className="container-sm m-auto bg-light rounded py-3 px-5">
          <table className="table table-striped caption-top mb-2">
            <caption>
                <div className="d-flex justify-content-between">
                  Pagos realizados por {estudianteQuePago.nombre} {estudianteQuePago.apellido}
                  <div className="col-sm-3 btn-group">
                    <NavLink className="btn btn-primary" to={"/pagos"} onClick={()=>setdataPayment(estudianteQuePago)}> 
                      Realizar Pago 
                    </NavLink>  
                  </div>
                </div>
            </caption>
    
            <thead>
              <tr>
                <th scope="col">MES</th>
                <th scope="col">AÑO</th>
                <th scope="col">VALOR</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment=> (
                <tr key={payment._id}>
                  <th scope="row">{payment.mes}</th>
                  <td>{payment.ano}</td>
                  <td>VALOR</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );

}