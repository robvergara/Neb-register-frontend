import React from "react";
import { useAuth } from "../contexts/auth";

export function LoginPage(){
  const [user, setUser] = React.useState({usuario:'', password:''});
  const auth = useAuth();

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUser(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const login=(e)=>{
    e.preventDefault();
    auth.login(user.usuario, user.password);
  }

  return(
    <form onSubmit={login} className="container-sm my-3 ">
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Usuario</label>
        <div className="col-sm-8">
          <input  
          className="form-control"  
          placeholder="********"
          name="usuario"
          value={user.usuario}
          onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label" >Contraseña</label>
        <div className="col-sm-8">
          <input
           type="password" 
           className="form-control" 
           placeholder="********"
           name="password"
           value={user.password}
           onChange={handleChange}
           />
        </div>
        <button className="btn btn-primary mt-3 col-sm-6 mx-auto" type="submit">Entrar</button>
      </div>
    </form>
  )
}