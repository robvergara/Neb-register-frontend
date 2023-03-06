import React from "react";
import { useNavigate } from "react-router-dom";
import { PaymentContext } from "../../contexts/paymentscontext";
import { StateContext } from "../../contexts/statesContext";
import { useAuth } from "../../contexts/auth"

export function PaymentPage(){
  const {dataPayment, setdataPayment, handleChange, onSubmit} = React.useContext(PaymentContext);
  // console.log (dataPayment);
  const navigate = useNavigate();
  const auth = useAuth();
  const {state, onRegret} = React.useContext(StateContext);

  const onCancel= (e)=>{
    e.preventDefault();
    setdataPayment({});
    onRegret();
    navigate(-1);
  }
  // console.log(auth)
  
  if(auth.user?.status === 1) {
    return(
      <>
        
  
  
        <div className="container-sm mb-4">
          <div className="card shadow">
            <h3 className="card-header">
              <b>FORMATO PARA PAGOS</b>
            </h3>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-xl-9 col-12">
                    <div className="row">
                      <div className="col-md-4 col-12 m-auto px-2 my-2 d-flex justify-content-center">
                        <div className="row col-12">
                          <div className="col-12">
                            <b>CEDULA:</b>
                          </div>
                          <div className="col-12">
                            {(!dataPayment.cedula) && (
                              <input value={dataPayment.cedula} placeholder="cedula" onChange={handleChange} name="cedula" className="col-12"/>
                            )}
                            {(!!dataPayment.cedula) && (
                              <input value={dataPayment.cedula} placeholder="cedula" className="col-12" readOnly/>
                            )}
                            <input type="hidden" value={dataPayment.estudiante_id}/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 m-auto px-2 my-2 d-flex justify-content-center">
                        <div className="row col-12">
                          <div className="col-12">
                            <b>MES:</b>
                          </div>
                          <div className="col-12">
                            <select className="col-12" name="month" onChange={handleChange} required>
                              <option defaultValue readOnly> Mes </option>
                                {months.map(month=> (
                                <option key={month.value} value={month.value}>{month.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 m-auto px-2 my-2 d-flex justify-content-center">
                        <div className="row col-12">
                          <div className="col-12">
                            <b>AÑO:</b>
                          </div>
                          <div className="col-12">
                            <input value={dataPayment.year} className="col-12" type="number" min={2023} placeholder="año" onChange={handleChange} name="year"/>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>
                  <div className="col-xl-3 col-12 d-flex justify-content-center">
                    <div className="px-1 my-2 d-flex justify-content-center">
                      <button className="mx-1 btn btn-success"><i className="fa-solid fa-dollar-sign"></i> PAGAR</button>
                    </div>
                    <div className="px-1 my-2  d-flex justify-content-center">
                      <button className="mx-1 btn btn-danger" onClick={onCancel}><i className="fa-solid fa-arrow-left"></i> ATRAS</button>
                    </div>
                  </div>
                  <div className="col-12">
                    {(state.error) && (
                      <h4 className="alert alert-danger">
                        Hubo un error en el pago
                      </h4>
                    )}
                    {(state.success) && (
                      <h4 className="alert alert-success">
                        Pago realizado correctamente!
                      </h4>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
    
  }
  else {
    <>
      <h1 className="alert alert-success">Acceso no autorizado</h1>
    </>
  }
}

export const months = [];

months.push({name: "Enero", value: 0});
months.push({name: "Febrero", value: 1});
months.push({name: "Marzo", value: 2});
months.push({name: "Abril", value: 3});
months.push({name: "Mayo", value: 4});
months.push({name: "Junio", value: 5});
months.push({name: "Julio", value: 6});
months.push({name: "Agosto", value: 7});
months.push({name: "Septiembre", value: 8});
months.push({name: "Octubre", value: 9});
months.push({name: "Noviembre", value: 10});
months.push({name: "Diciembre", value: 11});