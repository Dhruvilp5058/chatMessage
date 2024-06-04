import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  signup: [],
  profile: {},
  pdf: {},

};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    signupauth: (state, action) => {
      state.signup = action.payload
    },
    loginAutharrey: (state, action) => {
      state.value = action.payload
    },
    profileavatar: (state, action) => {
      state.profile = action.payload
    },
    pdfview: (state, action) => {
      state.pdf = action.payload
    }


  },
});
export const {
  signupauth,
  loginAutharrey,
  profileavatar,
  pdfview

} = counterSlice.actions;

export default counterSlice.reducer;
