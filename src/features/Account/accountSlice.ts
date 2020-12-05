
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import accountApi from "app/api/account";
import { ILoginForm, INewUser, IResponseUser } from "app/models/account";
import { IErrorFromAPI } from "app/models/error";
import { messageSuccess , messageError} from "app/notification/message";
import { history } from "index";



import { ILogin } from "./types/account";

interface ILoginState {
  accounts: ILogin[];
  isLogin : boolean,
  email: string,
  username : string,
  newUser : INewUser[]
}

const initialState: ILoginState = {
    accounts: [],
    isLogin: false,
    email : "",
    username : "",
    newUser : [],
};

export const login = createAsyncThunk(
  "account/login",
  async (accounts : ILoginForm, thunkAPI) => {
    try {
      const res = await accountApi.login(accounts);
      messageSuccess("Đăng nhập thành công",3000)
      history.push("/")
      return res;
    } catch (error) {
      const err = error as IErrorFromAPI;
      messageError("Sai tài khoản hoặc mật khẩu",2000)
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  "account/resgiter",
  async (newUser : INewUser, thunkAPI) => {
    try {
      const res = await accountApi.register(newUser);
      
      return res;
      
    } catch (error) {
      const err = error as IErrorFromAPI;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        addNewLoginAccount(state, { payload }: PayloadAction<ILogin>) {  
          state.accounts.push(payload);
      },
      addNewUser (state, {payload} : PayloadAction<INewUser>){
        state.newUser.push(payload)
      },
      setLoginSuccess(state,{payload} : PayloadAction<IResponseUser>){
          state.isLogin = true
          state.username = payload.user.username
          state.email = payload.user.email
      }
    },
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, { payload }) => {
          window.localStorage.setItem("jwt",payload.token)
          state.isLogin = true
          state.username = payload.username
      });
  
      builder.addCase(login.rejected, (state, action) => {
        // if (action.payload) {
        //   // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        //   state.error = action.payload.errorMessage
        // } else {
        //   state.error = action.error.message
        // }
      });
    },
  });
  
  const { actions, reducer } = accountSlice;
  
  export const {
    addNewLoginAccount,
    addNewUser,
    setLoginSuccess
  } = actions;
  
  export default reducer;
  