import React from "react";
import { useParams } from "react-router-dom";
import { getEntrenador } from "../../services/entrenadores.services";


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
      <h1>Perfil de {coach.nombre} {coach.apellido} </h1>
      <p><b> Cedula: </b> {coach.cedula}</p>
    </>
  )
}