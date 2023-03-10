import React from "react";
import { modifyConfigPayments, getConfigPayments } from "../services/payments.services";
import { StateContext } from "../contexts/statesContext";
import { useAuth } from "../contexts/auth";

export function ConfigPaymets(){
  const [dataConfig, setDataConfig] = React.useState({});
  const {state, onSuccessConfig, onErrorConfig} = React.useContext(StateContext);
  const auth = useAuth()

  React.useEffect(()=>{
    async function dataConfigPayment (){
      const config = await getConfigPayments();
      // console.log(config);
      setDataConfig(config[0]);
    };
    if(!!auth.user){
      dataConfigPayment();
    }
  },[auth])
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
      onSuccessConfig();
    } catch (error) {
      console.log(error);
      onErrorConfig()
    }
  }

  return(
    <>
      <form onSubmit={onSubmit} className="m-auto ">
        <div className="row px-5">
          <div className="col-md-8 col-12">
            <div className="row px-4">
              <div className="col-md-12 col-12 my-2">
                <div className="row">
                  <b className="col-6 m-auto">Mensualidad: </b>
                  <div className="text-end col-6">
                    <input value={dataConfig.mensualidad} type="number" placeholder="mensualidad" onChange={handleChange} name="monthly" className="col-12"/>
                  </div>
                </div>
                
              </div>
              <div className="col-md-12 col-12 my-2">
                <div className="row">
                  <b className="col-6 m-auto">Porcentaje: </b>
                  <div className="text-end col-6">
                    <input value={dataConfig.porcentaje} type="number" placeholder="porcentaje"  onChange={handleChange} name="percent" className="col-12"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-auto px-4 my-2 d-flex justify-content-center">
            <button className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i> Guardar Cambios</button>
          </div>          
        </div>

        {!!state.configSuccess && (
          <h4 className="alert alert-success">
            configuracion de pagos modificada correctamente
          </h4>
        ) }
        {!!state.configError && (
          <h4 className="alert alert-danger">
            Hubo un problema al generar la configuracion
          </h4>
        ) }
      </form>
    </>
  )
}