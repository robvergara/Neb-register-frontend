import React from "react";
import { NavLink } from "react-router-dom";

export function Menu () {
  return(
    <>
      <h1>Menú</h1>
      <NavLink to={'/entrenadores'}> Entrenadores </NavLink>
      <NavLink to={'/categorias'}>Categorias</NavLink>
      <NavLink to={'/estudiantes'}>Estudiantes</NavLink>
    </>
  )
}