import React from "react";
import {useNavigate} from "react-router-dom";
// import { CoachContext } from "./coachContext";

import { userList } from "../users";

export const AuthContext = React.createContext()

export function AuthProvider({children}){
  // const {entrenadores} = React.useContext(CoachContext)
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login =(usuario,password)=>{
    console.log(usuario);
    const profile = userList.find(user => usuario === user.usuario && password === user.contrasena);
    console.log(profile);

    try {
      const userName = profile.nombre;
      const userLastname = profile.apellido;
      const status = profile.status;
      console.log(`El usuario es ${userName} ${userLastname}`);
      console.log(`El rol del usuario es ${status===1? 'Administrador' : 'Profesor'}`);
      setUser({userName, status});
      navigate('/');
    } catch (error) {
      console.log('El perfil no existe');
      console.log(error);
      // navigate('/error'); HACER PAGINA DE ERROR
    }
  }

  const logout=()=>{
    setUser(null);
    navigate('/')
    console.log('salida exitosa')
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