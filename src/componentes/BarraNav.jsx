import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/NetflixLogo.png'
import '../estilos/barraNav.css'

function BarraNav({children}) {
  return (
    <div className='barraNavContainer'>
      <NavLink to={"/"} className='logoContainer'> <img src={logo} alt="" /> </NavLink> 
      
      {children}
    </div>
  )
}

export default BarraNav