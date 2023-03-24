import React from 'react'
import { Button, InputLogin } from '../estilos/stayled'
import BarraNav from '../componentes/BarraNav'
import '../estilos/signIn.css'

function SignIn() {
  return (
    <div className="loginContainer">
       <BarraNav/> 
      <div className='signInContainer'>
        <h2>Sign In</h2>
        <form action="">
          <InputLogin white  type="email" placeholder='escribe el correo' ></InputLogin>
          <InputLogin white type="password" placeholder='contraseña' ></InputLogin>
          <Button >Sign In</Button>
        </form>
        <div className="signHelp">
          <a href="#">Recordar contraseña</a>
        </div>
      </div>
    </div>

  )
}

export default SignIn