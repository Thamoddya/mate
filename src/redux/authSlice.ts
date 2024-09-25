import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  code: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordLengthAcceptable: boolean;
  passwordContainData: boolean;
  email: string;
  confirmPassword: string;
}

const initialState: AuthState = {
  code: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordLengthAcceptable: false,
  passwordContainData: false,
  email: '',
  confirmPassword: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.passwordLengthAcceptable = action.payload.length >= 8;
      // Example regex check for password requirements
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
      state.passwordContainData = passwordRegex.test(action.payload);
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword = action.payload;
    },
    signIn(state) {
      // Here you can add your sign in logic
      console.log('Sign In');
      console.log(state);
    },
    signUp(state) {
      // Here you can add your sign up logic
      console.log('Sign Up');
      console.log(state);
    },
  },
});

export const {
  setCode,
  setFirstName,
  setLastName,
  setPassword,
  setEmail,
  setConfirmPassword,
} = authSlice.actions;

export default authSlice.reducer;
