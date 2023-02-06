import React from "react"; 
import {createReport} from "../services/payments.services"
import { months } from "../Payment/PaymentPage";
import { StateContext } from "../contexts/statesContext";

export function ReportPage(){
  const [dataForReport , setDataForReport] = React.useState({});
  const {onError, onSuccess ,onCancel , state} = React.useContext(StateContext);
  console.log(dataForReport)
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
    <div className="container text-center">
      <h4>Selecciona el mes y año para generar el reporte (este sera enviado a tu correo electronico en formato PDF)</h4>
      <form onSubmit={onSubmit}>
        <select 
          className="mb-3 mx-1 col-sm-3 py-1"
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
          className="mb-3 mx-1 col-sm-3" 
          type="number" min={2023} 
          placeholder="año" 
          onChange={handleChange} 
          name="year" 
        />

        <div>
          <button 
            className="btn btn-primary mx-1 col-lg-4">
              generar reporte
          </button>

          <button 
            className="btn btn-primary mx-1 col-lg-4" 
            onClick={onCancel}> 
              regresar 
          </button>
        </div>
      </form>
      {!!state.success && (
        <h4 className="alert alert-success">
          Reporte generado correctamente! por favor revisa tu correo electronico
        </h4>
      ) }
    </div>
  )
}