// Example slice, update if needed
import { createSlice } from '@reduxjs/toolkit';

const persistedProfile = localStorage.getItem('profile');
const initialState = persistedProfile
  ? JSON.parse(persistedProfile)
  : {
      name: '',
      email: '',
      password: ''
    };

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      Object.assign(state, action.payload);
      localStorage.setItem('profile', JSON.stringify(state));
    }
  }
});

export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;