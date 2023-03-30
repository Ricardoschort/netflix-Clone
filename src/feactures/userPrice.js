import {createSlice} from '@reduxjs/toolkit';
const userPrice = createSlice({
  
  name: 'price',
  initialState: {
    value:0,
  },
  reducers: {
    setPrice:(state,action)=>{
      state.price = action.payload;
    }    
  },
 
});

export const {setPrice} = userPrice.actions;

export const selectPrice = state => state.price.price;

export default userPrice.reducer;