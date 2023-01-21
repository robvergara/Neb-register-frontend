import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth";

export function LogOutPage(){
  const auth = useAuth();
  const navigate = useNavigate()

  const logout = (e) =>{
    e.preventDefault();
    auth.logout()
  }

  const onCancel= (e)=>{
    e.preventDefault();
    navigate(-1)
  }

  return(
    <>
      <h1>Logout</h1>

      <form className="container text-center" onSubmit={logout}>
        <div className="row mb-3">
          <label className="col">Seguro que quieres salir?</label>
        </div>

        <div className="btn-group">
          <button className=" btn btn-primary " type="submit">Salir</button>
          <button className=" btn btn-primary " onClick={onCancel}>cancelar</button>
        </div>
      </form>
    </>
  )
}