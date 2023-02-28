import React from "react";
import { useParams } from "react-router-dom";
import { getEntrenador } from "../../services/entrenadores.services";
import "./profile.css"


export function CoachProfile(){
  const {id} = useParams();

  const [coach, setCoach] = React.useState({});

  React.useEffect(()=>{
    async function obtenerEntrenador(){
      const entrenador = await getEntrenador(id);
      setCoach(entrenador[0]);
    }
    obtenerEntrenador();
  },[])

  // console.log(coach);
  return(
    <> 
      <div className="container-sm">
        <div className="card p-5">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-center my-2">
              <img src="sin-foto.png" className="img-thumbnail imagen"/>
            </div>
            <div className="col-md-10 my-2">
              <h1>{coach.nombre} {coach.apellido} </h1>
              <p><b> Cedula: </b> {coach.cedula}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}