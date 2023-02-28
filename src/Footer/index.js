import React from "react";
import "./Footer.css"


export function Footer(){
  return(
    <>
    <footer className="section seccion-oscura d-flex flex-column justify-content-center align-items-center mt-3 bg-dark">
        <div className="container-sm">
          <div className="row">
            <div className="col-3 text-center">
              <img src="neb-logo.png" className="w-50 my-4" alt="Logo"/>
            </div>
            <div className="col-6 m-auto">
              <h3>NEB COLOMBIA</h3>
              <h6>Profesor: Deivis José Seidel Delgado</h6>
              <h6>Cel: +57 301 3679934</h6>
            </div>
            <div className="col-3 m-auto">
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <a className="iconos-redes-sociales " href="https://instagram.com/escuelanebcolombia?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-instagram"></i>
                </a>
                <a className="iconos-redes-sociales " href="mailto:neb.notificaciones@gmail.com">
                  <i class="bi bi-envelope-at-fill"></i>
                </a>
                <a className="iconos-redes-sociales " href="https://www.facebook.com/profile.php?id=100076279402140" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}