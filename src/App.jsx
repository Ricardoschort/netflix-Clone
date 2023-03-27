import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login'
import Home from './Paginas/Home'
import Profile from './Paginas/Profile'
import PayPal from './Paginas/PayPal'
import NotFound from './Paginas/NotFound'
import SignIn from './Paginas/SignIn'
import EditProfile from './Paginas/EditProfile'


function App() {
  let user = "pepe"

  return (
    <div className="App">

      <Routes>
      <Route path="perfil" element={<Profile />} />
      <Route path="paypal" element={<PayPal />} />
      <Route path="login" element={<Login />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="edit" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />   

      </Routes>
    </div>
  )
}

export default App
