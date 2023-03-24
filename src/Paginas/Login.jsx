import BarraNav from '../componentes/BarraNav'
import '../estilos/login.css'
import { Button , InputLogin} from '../estilos/stayled'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="loginContainer">
       <BarraNav> 
            <Link to ="/signIn"><Button primary>Sign in</Button> </Link>
        </BarraNav>
       <div className="loginInfoContainer">
          <h2>Ilimitadas peliculas, series y documentales</h2>
          <p>Puedes disfrutar con tu familia, solo o con amigos</p>
          <div className='btnLoginInfo'>
            <form action="">
              <InputLogin type="email" placeholder='escribe el correo' ></InputLogin>
              
              <Button>Get stared</Button>
            </form>
          </div>
       </div>
       
    </div>
  )
}

export default Login