import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import {useReducer} from 'react'

export const HeroesApp = () => {

  const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
  }

  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{user, dispatch}} >
      <AppRouter />
    </AuthContext.Provider>
  );
};
