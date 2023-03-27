import React from 'react'
import { Button } from '../estilos/stayled'
import '../estilos/plans.css'

function Plans({cost,children,color,wide}) {
  return (
    <div className='PlansContainer'>
      {children} 
      <Button wide={wide} color={color}>Suscribe</Button>
    </div>
  )
}

export default Plans