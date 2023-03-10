import React from "react";
import { CoachContext } from "../../contexts/coachContext";
import { Coach } from "../Coach";
// import { entrenadores } from "../../entrenadores";


export function CoachList(){
  const {entrenadores} = React.useContext(CoachContext)
  // console.log(entrenadores)
  return(
    <>    
      <h3 className="card-header">
        <b>LISTA DE ENTRENADORES</b>
      </h3>

      {(!entrenadores || entrenadores.length === 0) && (
        <div className="list-group-item">
          <div className="d-flex w-100 justify-content-between p-3">
            <h5 className="m-auto">No hay entrenadores</h5>
          </div>
      </div>
      )}
      
      <div className="row p-3">
        {entrenadores.map(entrenador => (
          <Coach 
            key={entrenador.cedula} 
            entrenador = {entrenador} 
          />
          
      ))}
      </div> 
      

    </>
  )
}