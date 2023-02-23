import React from "react";
import { PaymentContext } from "../contexts/paymentscontext";
import { StateContext } from "../contexts/statesContext";

export function HomeSearch(){
  const {searchValue, HomeSearchHandleChange, onSearch} = React.useContext(PaymentContext);
  const {onRegret} = React.useContext(StateContext);

  // console.log(searchValue);
  return(
    <div className="container d-flex align-items-center justify-content-center m-auto">
      <div className="card w-25 mb-5">
        <div className="card-header text-center">
          BUSQUEDA DE PAGOS
        </div>
        <div className="card-body text-center">
          <img src="neb-logo.png" className="w-50 my-4" alt="Logo"/>
          <h5 className="card-title">Ingrese una cedula</h5>
          <div className="row mb-3">
            <input className="col-sm-8 mx-auto text-center" type="text" placeholder="#####" value={searchValue} onChange={HomeSearchHandleChange } />
          </div>
          <div className="row mb-3">
            <button className=" btn btn-primary col-sm-6 mx-auto" onClick={()=>{onSearch(searchValue); onRegret()}} >BUSCAR</button>
          </div>
          </div>
      </div>
      {/* <div>
        <h1 className="my-3">ESTUDIANTE</h1>
        <h3 className="my-3">Ingrese una cedula</h3>
        <div className="row mb-3">
          <input className="col-sm-6 mx-auto" type="text" placeholder="Escriba la cedula para buscar" value={searchValue} onChange={HomeSearchHandleChange } />
        </div>
        <div className="row mb-3">
          <button className=" btn btn-primary col-sm-6 mx-auto" onClick={()=>{onSearch(searchValue); onRegret()}} >buscar estudiante</button>
        </div>
      </div> */}
    </div>
  )
}