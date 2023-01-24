import React from "react";
import {useNavigate} from "react-router-dom";
import { getLogin } from "../services/login.services";
// import { CoachContext } from "./coachContext";

// import { userList } from "../users";
import { StateContext } from "./statesContext";

export const AuthContext = React.createContext()

export function AuthProvider({children}){
  const {onError, onRegret} = React.useContext(StateContext);
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login =(usuario,password)=>{
    // console.log(usuario);
    // const profile = userList.find(user => usuario === user.usuario && password === user.contrasena);
    // console.log(profile);
    const user = getLogin(usuario, password);

    try {
      const userName = user.nombre;
      const status = user.status;
      // console.log(`El rol del usuario es ${status===1? 'Administrador' : 'Profesor'}`);
      setUser({userName, status});
      onRegret();
      navigate('/');
    } catch (error) {
      onError();
      // console.log(error);
    }
  }

  const logout=()=>{
    localStorage.removeItem("user");
    setUser(null);
    console.log('salida exitosa');
    navigate('/login');
  }

  const auth = {user, login, logout}

  return(
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth
}

