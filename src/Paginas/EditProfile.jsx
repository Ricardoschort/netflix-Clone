import React from 'react'
import '../estilos/editProfile.css'
import Header from '../componentes/Header'
import Plans from '../componentes/Plans'
import { Button } from '../estilos/stayled'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'


function EditProfile() {
  const navigate = useNavigate()

  const handleExit =()=>{
    auth.signOut();
    navigate('/app/login')
    
  }

  return (
    <div className='editProfileContainer'>
      <Header />
      <div className="editInfo">
        <h2>Edit Profile</h2>
        <div className='editInfoEmail'>
          <p>username@gmail.com</p>
        </div>
        <h4>Plans</h4>
        <hr />
        <div className="plansContainer">
          <Plans cost={"16.500"}>Plan Standart</Plans>
          <Plans cost={"26.000"}>Plan Basic</Plans>
          <Plans wide="medium" color="gray" secundary cost={"48.500"}>Plan Premium</Plans>
          <Button wide="fullwidth"
          onClick={handleExit}
                         
          >Sign Out</Button>
        </div>

      </div>
    </div>
  )
}

export default EditProfile