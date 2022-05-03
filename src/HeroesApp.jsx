import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import {useReducer} from 'react'

export const HeroesApp = () => {

  const init = ()=>{
    return { nombre: 'Ivan temp', logged: true}
  }

  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{user, dispatch}} >
      <AppRouter />
    </AuthContext.Provider>
  );
};
