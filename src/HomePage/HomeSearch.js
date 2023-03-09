import React from "react";
import { PaymentContext } from "../contexts/paymentscontext";
import { StateContext } from "../contexts/statesContext";

export function HomeSearch(){
  const {searchValue, HomeSearchHandleChange, onSearch} = React.useContext(PaymentContext);
  const {onRegret} = React.useContext(StateContext);

  // console.log(searchValue);
  return(
    <div className="d-flex align-items-center justify-content-center align-middle">
      <div className="card mb-5 shadow" id="estudiante">
        <div className="card-header text-center">
          BUSQUEDA DE PAGOS
        </div>
        <div className="card-body text-center">
          <img src="neb-logo.png" className="w-50 my-4" alt="Logo"/>
          <h5 className="card-title">Ingrese una cedula</h5>
          <div className="row mb-3">
            <input className="w-75 mx-auto text-center" type="text" placeholder="#####" value={searchValue} onChange={HomeSearchHandleChange } />
          </div>
            <div className="row mb-3">
              <button className="w-75 btn btn-primary mx-auto" disabled={searchValue.length < 6 ? true : false} onClick={()=>{onSearch(searchValue); onRegret()}}><i className="fa-solid fa-magnifying-glass"></i> BUSCAR</button>
            </div>
          </div>
      </div>
    </div>
  )
}