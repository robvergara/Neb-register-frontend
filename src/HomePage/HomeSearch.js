import React from "react";
import { PaymentContext } from "../contexts/paymentscontext";
import { StateContext } from "../contexts/statesContext";

export function HomeSearch(){
  const {searchValue, HomeSearchHandleChange, onSearch} = React.useContext(PaymentContext);
  const {onRegret} = React.useContext(StateContext);

  // console.log(searchValue);
  return(
    <div className="container text-center">
      <h1 className="my-3">busqueda de estudiante</h1>
      <div className="row mb-3">
        <input className="col-sm-6 mx-auto" type="text" placeholder="Escriba la cedula para buscar" value={searchValue} onChange={HomeSearchHandleChange } />
      </div>
      <div className="row mb-3">
        <button className=" btn btn-primary col-sm-6 mx-auto" onClick={()=>{onSearch(searchValue); onRegret()}} >buscar estudiante</button>
      </div>
    </div>
  )
}