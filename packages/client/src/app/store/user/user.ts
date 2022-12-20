import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {YandexAPI, Headers} from "../tmpConst";

type LoginData = {
  login: string
  password: string
}

type LoginParams = {
  data: LoginData
}

export const loginUser = createAsyncThunk(
  'user/setUser', async({data}: LoginParams , {dispatch}) => {
    const response = await fetch(`${YandexAPI}/auth/signin`, {
      method: 'POST',
      headers: {
        ...Headers.json
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      dispatch(userSlice.actions.setAuth({isAuth: true}));
      localStorage.setItem("login", data.login);
      localStorage.setItem("password", data.password)
      return;
    } else {
      const errorResponse = await response.json();
      if (errorResponse.reason) throw new Error(errorResponse.reason);
    }
  }
);

const initialState = {
  isAuth: false,
  name: null,
  surname: null,
  login: null,
  email: null
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        state.isAuth = action.payload.isAuth;
    }
  },
});


export default userSlice.reducer;
