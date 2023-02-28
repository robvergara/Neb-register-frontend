import React from "react"; 
import "./ReportPage.css"
import {createReport} from "../services/payments.services"
import { months } from "../Payment/PaymentPage";
import { StateContext } from "../contexts/statesContext";
import { useAuth } from "../contexts/auth";
import { ConfigPaymets } from "./ConfigPayments";

export function ReportPage(){
  const [dataForReport , setDataForReport] = React.useState({});
  const {onError, onSuccess ,onCancel , state} = React.useContext(StateContext);
  const auth = useAuth();
  // console.log(dataForReport)
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setDataForReport(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSubmit= async(e)=>{
    e.preventDefault();
    try {      
      const message= await createReport(dataForReport);
      console.log(message);
      // if(message.errors){
      //   onError()
      //   return;
      // }
      onSuccess();
    } catch (error) {
      console.log(error);
      onError()
    }
  }

  return(
    <>
      <div className="report-body container text-center my-5 d-flex flex-column align-items-center justify-content-center">
        <h4 className="mb-5">Selecciona el mes y año para generar el reporte (este sera enviado a tu correo electronico en formato PDF)</h4>
        <form onSubmit={onSubmit}>
          <div className="row d-flex justify-content-center">
            <select 
              className="col-6 col-md-3 mb-3 mx-1 py-1"
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
              value={dataForReport.year} 
              className="col-6 col-md-3 mb-3 mx-1 " 
              type="number" min={2023} 
              placeholder="año" 
              onChange={handleChange} 
              name="year" 
            />

            <div className="row d-flex justify-content-center">
              <button 
                className="col-6 col-md-4 btn btn-primary mb-3 mx-1">
                  generar reporte
              </button>

              <button 
                className="col-6 col-md-4 btn btn-primary mb-3 mx-1" 
                onClick={onCancel}> 
                  regresar 
              </button>
            </div>
          </div>
        </form>
        {!!state.success && (
          <h4 className="alert alert-success">
            Reporte generado correctamente! por favor revisa tu correo electronico
          </h4>
        ) }
        {!!state.error && (
          <h4 className="alert alert-danger">
            Hubo un problema al generar el reporte. por favor revisa los datos ingresados
          </h4>
        ) }
      </div>

      {(!!auth.user?.token && auth.user?.status === 1) && (
        <ConfigPaymets/>
      )}
    </>
  )
}