import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth";
import "./logout.css"

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
      <form className="container text-center" onSubmit={logout}>
        <div className="d-flex align-items-center justify-content-center align-middle">
          <div className="card ingresar" id="">
            <div className="card-header text-center">
              SALIR
            </div>
            <div className="card-body text-center">
              <img src="neb-logo.png" className="w-50 my-4" alt="Logo"/>
              <div className="row">
                <div className="col-12">
                  <label className="col">Seguro que quieres salir?</label>
                </div>
                <div className="col-12 ">
                  <div className="btn-group row m-auto">
                    <button className="btn btn-danger col-6" type="submit">
                      <div className="row">
                        <i class="fa-solid fa-xmark col-12"></i>
                        <b className="col-12">SI</b>
                      </div>  
                    </button>
                    <button className="btn btn-success col-6" onClick={onCancel}>
                      <div className="row">
                        <i class="fa-solid fa-check col-12"></i>
                        <b className="col-12">NO</b>
                      </div>  
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}