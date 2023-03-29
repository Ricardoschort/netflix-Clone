import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../feactures/userSlice';
export default configureStore({
  reducer:{
    user : userReducer
  }
})
