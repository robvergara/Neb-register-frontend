import React from "react";
import logo from "../assets/images/neb-logo.png"
import "./Footer.css"

export function Footer(){
  return(
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
  )
}