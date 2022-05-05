import './LoginScreen.style.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';

export const LoginScreen = () => {

  const {dispatch}= useContext(AuthContext)

  //Funcion con la que puedo navegar a otra pantalla
  const navigate = useNavigate()
  const handleLogin = ()=> {

    const action = {
      type: types.login,
      payload: {
        name:'Ivan'
      }
    }

    dispatch(action)
   
    navigate('/marvel',{
      //Remplazar la historia para no volver al login despues de entrar
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button
      onClick={handleLogin}
        className='btn btn-primary'>Login</button>
    </div>
  )
};