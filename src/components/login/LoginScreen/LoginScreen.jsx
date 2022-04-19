import './LoginScreen.style.css';

import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  //Funcion con la que puedo navegar a otra pantalla
  const navigate = useNavigate()
  const handleLogin = ()=> {
    console.log('handle login')
    navigate('marvel',{
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