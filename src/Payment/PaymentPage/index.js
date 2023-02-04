import React from "react";
import { useNavigate } from "react-router-dom";
import { PaymentContext } from "../../contexts/paymentscontext";
import { StateContext } from "../../contexts/statesContext";

export function PaymentPage(){
  const {dataPayment, setdataPayment, handleChange, onSubmit} = React.useContext(PaymentContext);
  console.log (dataPayment);
  const navigate = useNavigate();
  const {state, onRegret} = React.useContext(StateContext);

  const onCancel= (e)=>{
    e.preventDefault();
    setdataPayment({});
    onRegret();
    navigate(-1);
  }

  return(
    <>
      <h5 className="mt-5 mb-4">Ventana de pagos</h5>
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

      <form onSubmit={onSubmit}>
        <div>

          {(!dataPayment.cedula) && (
            <input 
              value={dataPayment.cedula} 
              placeholder="cedula" 
              onChange={handleChange}
              name="cedula" 
              className="mb-3 mx-1 col-sm-6"
            />)}

          {(!!dataPayment.cedula) && (
            <input 
              value={dataPayment.cedula} 
              placeholder="cedula" 
              className="mb-3 mx-1 col-sm-6"
              readOnly 
            />)}
          
          <input type="hidden" value={dataPayment.estudiante_id} />

          {/* <input 
            value={dataPayment.mes} 
            className="mb-3 mx-1 col-sm-2" 
            type="number" 
            min={1}
            max={12} 
            placeholder="mes" 
            onChange={handleChange} 
            name="mes" 
          /> */}

          <select 
            className="mb-3 mx-1 col-sm-2"
            name="month"
            onChange={handleChange}
            required
          >
            <option defaultValue readOnly> Mes </option>
            {months.map(month=> (
              <option key={month.value} value={month.value}>{month.name}</option>
            ))}
          </select>

          <input 
            value={dataPayment.ano} 
            className="mb-3 mx-1 col-sm-3" 
            type="number" min={2023} 
            placeholder="año" 
            onChange={handleChange} 
            name="year" 
          />

        </div>

        <div className="text-center" >

          <button 
            className="btn btn-primary mx-1 col-lg-4">
              realizar pago
          </button>

          <button 
            className="btn btn-primary mx-1 col-lg-4" 
            onClick={onCancel}> 
              regresar 
          </button>

        </div>
      </form>
    </>
  )
}

const months = [];

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