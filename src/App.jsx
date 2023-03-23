import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login'
import Home from './Paginas/Home'
import Profile from './Paginas/Profile'
import PayPal from './Paginas/PayPal'
import Signup from './Paginas/Signup'
import NotFound from './Paginas/NotFound'


function App() {
  let user = "pepe"

  return (
    <div className="App">

      <Routes>
      <Route path="perfil" element={<Profile />} />
      <Route path="paypal" element={<PayPal />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />   

      </Routes>
    </div>
  )
}

export default App
