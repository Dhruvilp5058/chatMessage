import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  signup:[],
  profile:{}

};
export const counterSlice = createSlice({ 
  name: 'counter', 
  initialState,
  reducers: {

    signupauth: (state, action) => {
      state.signup = action.payload
    },
    loginAutharrey: (state, action) => {
      state.value =  action.payload
    },
    profileavatar:(state,action)=>{
      state.profile=action.payload
    }


  },
});
export const { 
  signupauth, 
  loginAutharrey,
  profileavatar

} = counterSlice.actions;

export default counterSlice.reducer;
