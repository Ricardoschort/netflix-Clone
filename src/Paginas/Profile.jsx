import React from 'react'
import '../estilos/profile.css'
import Accounts from '../componentes/Accounts'
import {data} from'../functions/profiles'
import add from '../assets/Add.png'
import BarraNav from '../componentes/BarraNav'

function Profile() {

  return (
    <>
    <div className='profileContainer'>
       <BarraNav/>
       <div className='profileInfo'>
          <h2>¿Quién eres? Elige tu perfil</h2>
       </div>
       <div className='profiles'>
       {
        data.map(profile => <Accounts  key={profile.usuary} name ={profile.usuary} image={profile.url}
          />
        )
      }  
      <div className='btnProfileAddContainer'>
        <button className='btnProfileAdd'> <img src={add} alt="" /></button>
        <span>editar perfil</span>
      </div>
     
       </div>
      
    </div>
    <div className='profileBtnContainer'>
      <button className='profileBtn'>Adminstrador de Perfiles</button>
    </div>
   
    </>
  )
}

export default Profile