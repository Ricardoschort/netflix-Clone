import React from 'react'
import { Button } from '../estilos/stayled'
import '../estilos/plans.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setPrice} from '../feactures/userPrice.js'

function Plans({ secundary, cost, children, color, wide }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick =(cost)=>{
    dispatch(setPrice(cost))
    navigate('/paypal')
  }


  return (
    <div className='PlansContainer'>
      <div className='price'>
        {children}
        <p>$ {cost}</p>
      </div>
      <Button
        wide={wide}
        color={color}
        secundary={secundary}
        onClick ={()=>handleClick(cost)}
      >Suscribe
      </Button>

    </div>
  )
}

export default Plans