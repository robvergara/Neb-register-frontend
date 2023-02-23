import React from "react";

export function Footer(){
  return(
    // <>
    //   <h1>Footer</h1>
    // </>
    <div className="footer mt-auto py-2 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-3 text-center">
            <img src="neb-logo.png" className="w-50 my-4" alt="Logo"/>
          </div>
          <div className="col-6">
            <h2>NEB COLOMBIA</h2>
            <h5>Profesor: Deivis José Seidel Delgado</h5>
            <h6>Cel: +57 301 3679934</h6>
          </div>
          <div className="col-3">
            <img src="neb-logo.png" className="w-25 my-4" alt="Logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}