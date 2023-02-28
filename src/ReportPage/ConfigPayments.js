import React from "react";
import { modifyConfigPayments } from "../services/payments.services";
import { StateContext } from "../contexts/statesContext";

export function ConfigPaymets(){
  const [dataConfig, setDataConfig] = React.useState({monthly:0, percent:0});
  const {onError, onSuccess, state} = React.useContext(StateContext);

  // console.log(dataConfig)

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setDataConfig(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSubmit= async(e)=>{
    e.preventDefault();
    try {      
      await modifyConfigPayments(dataConfig);
      onSuccess();
    } catch (error) {
      console.log(error);
      onError()
    }
  }

  return(
    <>
      <form onSubmit={onSubmit} className="m-auto ">
        <div className="row px-5">
          <div className="col-md-8 col-12">
            <div className="row px-5">
              <div className="col-md-12 col-12 my-2">
                <div class="row">
                  <b className="col-6 m-auto">Mensualidad: </b>
                  <div className="text-end col-6">
                    <input value={dataConfig.monthly} type="number" placeholder="mensualidad" onChange={handleChange} name="monthly" className="col-12"/>
                  </div>
                </div>
                
              </div>
              <div className="col-md-12 col-12 my-2">
                <div class="row">
                  <b className="col-6 m-auto">Porcentaje: </b>
                  <div className="text-end col-6">
                    <input value={dataConfig.percent} type="number" placeholder="porcentaje"  onChange={handleChange} name="percent" className="col-12"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-auto px-4 my-2 d-flex justify-content-center">
            <button className="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Guardar Cambios</button>
          </div>          
        </div>

        {!!state.success && (
          <h4 className="alert alert-success">
            configuracion de pagos modificada correctamente
          </h4>
        ) }
        {!!state.error && (
          <h4 className="alert alert-danger">
            Hubo un problema al generar la configuracion
          </h4>
        ) }
      </form>
    </>
  )
}