import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { StateContext } from "../contexts/statesContext";
import "./login.css"


export function LoginPage(){
  const {state} = React.useContext(StateContext)
  const [user, setUser] = React.useState({usuario:'', password:''});
  const auth = useAuth();

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUser(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const login= async(e)=>{
    e.preventDefault();
    auth.login(user.usuario, user.password);
    console.log(user);
  }

  if(auth.user){
    return <Navigate to={"/"}/>
  }

  return(
    <>
      <form onSubmit={login} className="container-sm my-3">
        <div className="d-flex align-items-center justify-content-center align-middle">
          <div className="card ingresar" id="">
            <div className="card-header text-center">
              INGRESAR
            </div>
            <div className="card-body text-center">
              <img src="neb-logo.png" className="w-50 my-4" alt="Logo"/>
              <div className="row">
                <div className="col-12">
                  <h5 className="text-start">Usuario</h5>
                </div>
                <div className="col-12 mb-1">
                  <input required={true} className="form-control" placeholder="********" name="usuario" value={user.usuario} onChange={handleChange}/>
                </div>
                <div className="col-12 mt-1">
                  <h5 className="text-start">Contraseña</h5>
                </div>
                <div className="col-12">
                  <input required={true} type="password" className="form-control"  placeholder="********" name="password" value={user.password} onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary mt-3 col-sm-6 mx-auto" type="submit">Entrar</button>
                </div>
              </div>
              
              {/* <div className="row mb-3">
                <input required={true} className="form-control" placeholder="********" name="usuario" value={user.usuario} onChange={handleChange}/>
                
              </div>
              <h5 className="text-start">contraseña</h5>
              <div className="row mb-3">
                <input required={true} type="password" className="form-control"  placeholder="********" name="password" value={user.password} onChange={handleChange}/>
              </div>
              <button className="btn btn-primary mt-3 col-sm-6 mx-auto" type="submit">Entrar</button> */}
            </div>
          </div>
        </div>














        {/* <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Usuario</label>
          <div className="col-sm-8">
            <input required={true} className="form-control" placeholder="********" name="usuario" value={user.usuario} onChange={handleChange}/>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label" >Contraseña</label>
          <div className="col-sm-8">
            <input required={true} type="password" className="form-control"  placeholder="********" name="password" value={user.password} onChange={handleChange}/>
          </div>
          <button className="btn btn-primary mt-3 col-sm-6 mx-auto" type="submit">Entrar</button>
        </div> */}
      </form>

      {!!state.error && (
        <>
          <h5 className="alert alert-danger">
            Error, revise que su usuario y/o contraseña esten bien escritos
          </h5>
        </>
      )}
    </>
  )
}


