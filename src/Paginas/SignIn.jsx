import React, { useState } from 'react'
import { Button, InputLogin } from '../estilos/stayled'
import BarraNav from '../componentes/BarraNav'
import '../estilos/signIn.css'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";



function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });


  }
  const signUp = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className="loginContainer">
      <BarraNav />
      <div className='signInContainer'>
        <h2>Sign In</h2>
        <form action=''>
          <InputLogin primary white type='email'
            placeholder='escribe el correo'
            value={email}
            onChange={e => setEmail(e.target.value)}
          >

          </InputLogin>
          <InputLogin primary white type='password'
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