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
      <div className="container-sm mb-4">
        <div className="card shadow">
          <div className="row m-0 p-0">
            <div className="col-xl-6 col-12 m-0 p-0 tarjetas">
              <div className="card tarjetas">
                <h3 className="card-header">
                  <b>CONSOLIDADOS DE PAGOS</b>
                </h3>
                <div className="card-body m-auto d-flex justify-content-center">
                  <form onSubmit={onSubmit} className="m-auto">
                    <div className="row px-5">
                      <div className="col-md-8 col-12">
                        <div className="row px-5">
                          <div className="col-md-12 col-12 my-2">
                            <select className="col-12" name="month" onChange={handleChange} required>
                              <option defaultValue readOnly> Mes </option>
                              {months.map(month=> (
                                <option key={month.value} value={month.value}>{month.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-12 col-12 my-2">
                            <input value={dataForReport.year} className="col-12" type="number" min={2023} placeholder="año" onChange={handleChange} name="year"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 m-auto px-4 my-2 d-flex justify-content-center">
                        <button className="col-md btn btn-primary"><i className="fa-solid fa-flag"></i> Generar Reporte</button>
                        {/* <button className="col-6 col-md-4 btn btn-primary mb-3 mx-1"onClick={onCancel}>regresar</button> */}
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
                <div className="card-footer d-flex">
                  <p className="col-6 text-muted flex-fill m-auto"><b>Nota:</b> selecciona el mes y año para generar el reporte (este sera enviado a tu correo electronico en formato PDF)</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 m-0 p-0 tarjetas">
              <div className="card tarjetas">
                <h3 className="card-header">
                  <b>CONGIGURACIONES</b>
                </h3>
                <div className="card-body m-auto d-flex justify-content-center">
                  {(!!auth.user?.token && auth.user?.status === 1) && (
                    <ConfigPaymets/>
                  )}
                </div>
                <div className="card-footer d-flex">
                  <p className="col-6 text-muted flex-fill m-auto"><b>Nota:</b> el porcentaje equivale a la parte de la mensualidad que le pertence al Administrador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}