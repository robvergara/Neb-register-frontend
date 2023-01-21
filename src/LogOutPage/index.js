import React from "react";
import { useAuth } from "../contexts/auth";

export function LogOutPage(){
  const auth = useAuth();

  const logout = (e) =>{
    e.preventDefault();
    auth.logout()
  }

  return(
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>

        <label >Seguro que quieres salir?</label>

        <button className="btn btn-primary col-sm-2 mx-auto" type="submit">Salir</button>
      </form>
    </>
  )
}