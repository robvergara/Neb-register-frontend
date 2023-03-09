import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { getCurrentUser, getLogin } from "../services/login.services";
// import { CoachContext } from "./coachContext";

import { StateContext } from "./statesContext";

export const AuthContext = React.createContext()

export function AuthProvider({children}){
  const {onError, onRegret} = React.useContext(StateContext);
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  // console.log(user);

  React.useEffect(()=>{
    const controller = new AbortController();
    // const {signal} = controller; 

    try {
      const localStogareUser = getCurrentUser();

      if (!!localStogareUser){
       setUser(localStogareUser);
      }
    } catch (error) {
      if (error.name !== 'AbortError'){
        console.error(error.message)
      }
    };

    return () => controller.abort();
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

export function AuthRoute(props) {
  const auth = useAuth();

  if(!auth.user){
    return <Navigate to='/login'/>
  }

  return props.children;
}

