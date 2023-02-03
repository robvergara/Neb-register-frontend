import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { PaymentContext } from "../contexts/paymentscontext";

export function PaymentsList(){
  const {payments, setdataPayment, estudianteQuePago} = React.useContext(PaymentContext);
  const auth = useAuth();
  const studentDataPayment = {estudiante_id: estudianteQuePago._id, cedula: estudianteQuePago.cedula}

  // console.log(payments)
  return(
    <>
      {payments <= 0  && (
        <div className="container text-center">
          <h2 className="my-5"><b>Realiza tu busqueda</b></h2>
        </div>
      )}

      {!payments.length <= 0 && (
        <div className="col-sm-10 text-center">
          <div className="mb-3 row">
            <h4 className="col-sm-9">Pagos realizados por {estudianteQuePago.nombre} {estudianteQuePago.apellido}</h4>
            {auth.user?.status === 1 && 
              <div className="col-sm-3 btn-group">
                <NavLink className="btn btn-primary" to={"/pagos"} onClick={()=>setdataPayment(studentDataPayment)}> 
                  nuevo pago 
                </NavLink>  
              </div>
            }
          </div>
        </div>
      )}

      {payments.map(payment=> (
        <div key={payment._id}>
          <p><b>Fecha de pago: </b> {payment.mes} de {payment.ano}</p>
        </div>
      ))}
    </>
  );

}