import React from "react";
import { modifyConfigPayments } from "../services/payments.services";
import { StateContext } from "../contexts/statesContext";

export function ConfigPaymets(){
  const [dataConfig, setDataConfig] = React.useState({monthly:0, percent:0});
  const {onError, onSuccess ,onCancel , state} = React.useContext(StateContext);

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
      <h2>Configuracion de pago</h2>
      <form onSubmit={onSubmit}>
        <input
          value={dataConfig.monthly}
          type="number"
          placeholder="mensualidad"
          onChange={handleChange}
          name="monthly"

        />
        <input
          value={dataConfig.percent}
          type="number"
          placeholder="porcentaje"
          onChange={handleChange}
          name="percent"
        />

        <div className="row d-flex justify-content-center">
          <button 
            className="col-6 col-md-4 btn btn-primary mb-3 mx-1">
              Cambiar configuracion de pagos
          </button>
        </div>
      </form>
    </>
  )
}