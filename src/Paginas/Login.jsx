import BarraNav from '../componentes/BarraNav'
import '../estilos/login.css'
import { Button, InputLogin } from '../estilos/stayled'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate()

  const handleNav = () => {
    navigate('/signIn ')
  }
  return (
    <div className="loginContainer">
      <BarraNav>
        <Button
          onClick={handleNav}
          primary >Sign in</Button>
      </BarraNav>
      <div className="loginInfoContainer">
        <h2>Ilimitadas peliculas, series y documentales</h2>
        <p>Puedes disfrutar con tu familia, solo o con amigos</p>
        <div className='btnLoginInfo'>
          <form action="">
            <InputLogin className='inputLogin' borderNone white whitePlace type="email" placeholder='escribe el correo' ></InputLogin>

            <Button borderNone> Get stared</Button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login