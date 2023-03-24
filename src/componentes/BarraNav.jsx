import React from 'react'
import logo from '../assets/NetflixLogo.png'
import '../estilos/barraNav.css'

function BarraNav({children}) {
  return (
    <div className='barraNavContainer'>
      <a href="#" className='logoContainer'> <img src={logo} alt="" />
      </a>
      {children}
    </div>
  )
}

export default BarraNav