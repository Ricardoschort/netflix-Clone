import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login'
import Home from './Paginas/Home'
import Profile from './Paginas/Profile'
import PayPal from './Paginas/PayPal'
import NotFound from './Paginas/NotFound'
import SignIn from './Paginas/SignIn'
import EditProfile from './Paginas/EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser, login } from './feactures/userSlice'
import { auth } from './firebase'
import { useEffect } from 'react'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email

        }))
      } else {
        dispatch(logout)
      }
    });

    return unSuscribe;
  }, [dispatch])

  let user = useSelector(selectUser)


  return (
    <div className="App">

        <Routes>
        
          <Route path="profile" element={<Profile />} />
          <Route path="paypal" element={<PayPal />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />

        </Routes>
    </div>
  )
}

export default App
