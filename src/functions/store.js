import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../feactures/userSlice';
import priceReducer from '../feactures/userPrice'

export default configureStore({
  reducer:{
    user : userReducer,
    price: priceReducer,
  }
})
