import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function Menu () {
  const auth = useAuth()
  // console.log(auth.user.status);
  return(
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link active" to={'/'}> Home </NavLink>
            {/* <NavLink className="nav-link active" to={'/estudiantes'}>Estudiantes</NavLink> */}
            {!!auth.user && (
              <>
                <NavLink className="nav-link active" to={'/categorias'}>Categorias</NavLink>
                <NavLink className="nav-link active" to={'/estudiantes'}>Estudiantes</NavLink>
                {auth.user.status === 1 && (
                  <NavLink className="nav-link active" to={'/entrenadores'}> Entrenadores </NavLink>
                )}

                {auth.user.status === 1 && (
                  <NavLink className="nav-link active" to={'/reportes'} >Reportes</NavLink>
                )}

              </>
            )}

            {/* <NavLink className="nav-link active" to={'/pagos'}>Pagos</NavLink> */}

          </div>
        </div>
        <ul className="navbar justify-content-end">
          {loginRoutes.map(route => {
            if(route.publicOnly && auth.user) return null; //PARA QUE NO SE RENDERICE EL LOGIN
            if(route.private && !auth.user) return null; // PARA QUE NO SE RENDERICE EL PERFIL YL EL LOGOUT SI NO HAY LOGIN
            return(
              <NavLink 
                key={route.to}
                to={route.to}
                className="nav-link active"
              >
                {route.text}
              </NavLink>

            );
          })}
          {/* <NavLink className="nav-link active" to={'/login'}>login</NavLink> */}
        </ul>
      </div>

    </nav>
  )
}

const loginRoutes = [];
loginRoutes.push({
  to: '/login',
  text: 'login',
  private: false,
  publicOnly: true,
});
loginRoutes.push({
  to: '/logout',
  text: 'logout',
  private: true,
});