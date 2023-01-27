import React from "react";
import { PaymentContext } from "../contexts/paymentscontext";

export function PaymentsList(){
  const {payments, estudianteQuePago} = React.useContext(PaymentContext);

  // console.log(payments)
  return(
    <>
      {payments <= 0  && (
        <div className="container text-center">
          <h2 className="my-5"><b>Realiza tu busqueda</b></h2>
        </div>
      )}

      {!payments.length <= 0 && <h2>Pagos realizados por {estudianteQuePago.nombre} {estudianteQuePago.apellido}</h2>}
      {payments.map(payment=> (
        <div key={payment._id}>
          <p><b>Fecha de pago: </b> {payment.mes} de {payment.ano}</p>
        </div>
      ))}
    </>
  );

}