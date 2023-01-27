import React from "react";
import {useNavigate} from "react-router-dom";
import { getCurrentUser, getLogin } from "../services/login.services";
// import { CoachContext } from "./coachContext";

import { StateContext } from "./statesContext";

export const AuthContext = React.createContext()

export function AuthProvider({children}){
  const {onError, onRegret} = React.useContext(StateContext);
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(()=>{
     const localStogareUser = getCurrentUser();
     
     if (!!localStogareUser){
      setUser(localStogareUser);
     }
  },[]);

  const login = async(usuario,password)=>{
    // console.log(usuario);
    
    try {
      const user = await getLogin(usuario, password);
      const userName = user.nombre;
      const status = user.status;

      setUser({userName, status});
      onRegret();
      navigate('/');
      window.location.reload()

    } catch (error) {
      onError();
      console.log(error);
    }
  }

  const logout=()=>{
    localStorage.removeItem("user");
    setUser(null);
    console.log('salida exitosa');
    navigate('/login');
    window.location.reload()
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

