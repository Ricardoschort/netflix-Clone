import React, { useState } from 'react'
import { Button, InputLogin } from '../estilos/stayled'
import BarraNav from '../componentes/BarraNav'
import '../estilos/signIn.css'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => navigate('/'))
      .catch((error) => {
        const errorCode = error.code;
        alert(error.message);
      });


  }
  const signUp = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => navigate('/'))
      
      .catch((error) => {
        const errorCode = error.code;
        alert(error.message);
        // ..
      });
  }

  return (
    <div className="loginContainer">
      <BarraNav />
      <div className='signInContainer'>
        <h2>Sign In</h2>
        <form action=''>
          <InputLogin primary  type='email'
            placeholder='escribe el correo'
            value={email}
            onChange={e => setEmail(e.target.value)}
          >

          </InputLogin>
          <InputLogin primary  type='password'
            placeholder='contraseña'
            value={password}
            onChange={e => setPassword(e.target.value)}
          >
          </InputLogin>
          <Button type='submit' className='btnSignIn' wide='fullwidth' onClick={signIn}
          >Sign In
          </Button>
        </form>
        <div className='signHelp'>
          <p>New to Netflix?</p><a onClick={signUp} href='#'>Sign up now!</a>
        </div>
      </div>
    </div>

  )
}

export default SignIn