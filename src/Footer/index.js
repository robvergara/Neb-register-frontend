import React from "react";
import "./Footer.css"
import logo from "../assets/images/neb-logo.png"


export function Footer(){
  return(
    <>
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
      
      <>
        <footer className="section seccion-oscura d-flex flex-column justify-content-center align-items-center mt-3">
          <img className="footer-logo" src={logo} alt="logo de la pagina"/>
          {/* <p className="footer-texto text-center"> NEB Colombia. </p> */}
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a className="iconos-redes-sociales " href="https://instagram.com/escuelanebcolombia?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a className="iconos-redes-sociales " href="mailto:janedoe@micorreo.com">
                <i className="bi bi-envelope-at-fill"></i>
            </a>
          </div>

          <div className="derechos-de-autor">Creado por Robert Vergara (2023) &#169;</div>
        </footer>
      </>

    </>
  )
}