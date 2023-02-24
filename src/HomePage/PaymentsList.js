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
      {/* {payments.length <= 0  && (
        <div className="container text-center">
          <h2 className="my-5"><b>Realiza tu busqueda</b></h2>
        </div>
      )} */}

      {payments.length >= 1 && (
        <div className="container-sm m-auto bg-light rounded py-3 px-5">
          <table class="table table-striped caption-top mb-2">
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
          {/* <div className="col-sm-10 text-center">
            <div className="mb-3 row">
              <h4 className="col-sm-9">Pagos realizados por {estudianteQuePago.nombre} {estudianteQuePago.apellido}</h4>
              {auth.user?.status === 1 && 
                <div className="col-sm-3 btn-group">
                  <NavLink className="btn btn-primary" to={"/pagos"} onClick={()=>setdataPayment(estudianteQuePago)}> 
                    nuevo pago 
                  </NavLink>  
                </div>
              }
            </div>
          </div> */}
          {/* <div>
            {payments.map(payment=> (
              <div key={payment._id}>
                <p><b>Fecha de pago: </b> {payment.mes} de {payment.ano}</p>
              </div>
            ))}
          </div> */}
        </div>
        
      )}
    </>
  );

}