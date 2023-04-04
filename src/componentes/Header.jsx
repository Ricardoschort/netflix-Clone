import avatar from '../assets/avatar.jpeg'
import '../estilos/header.css'
import { BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { useState, useEffect } from 'react';
import BarraNav from './BarraNav';
import { useNavigate } from 'react-router-dom';




function Header() {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const trasparentHeader = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", trasparentHeader)

    return () => {
        window.removeEventListener("scroll",trasparentHeader)
    }
  }, [])

  return (
    <nav className={show ? 'navbarContainer hide' : 'navbarContainer'}>
      <BarraNav/>
      <div className='menu'>
        <BsSearch color='white' />
        <h5>Search</h5>
        <MdOutlineNotificationsNone color='white' className='iconNoti' />
        <img onClick={()=> navigate("/profile")}
             src={avatar} alt="avatar" />
        <BsFillCaretDownFill color='white' onClick={()=> navigate("/edit")} />
      </div>
    </nav>

  )
}

export default Header