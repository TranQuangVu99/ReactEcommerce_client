
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import addressApi from "app/api/address";
import { IAddress, INewAddress } from "app/models/address";
import { IErrorFromAPI } from "app/models/error";


interface IAddressState {
  addresses : IAddress[]
  newAddress: INewAddress[];

}

const initialState: IAddressState = {
    addresses:[],
    newAddress: [],
};

export const fetchAllAddress = createAsyncThunk(
    "addresses/fetchAllAddress",
    async (None, thunkAPI) => {
      try {
        const res = await addressApi.getAddress();
        return res.addresses;
      } catch (error) {
        const err = error as IErrorFromAPI;
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
export const addNewAddress = createAsyncThunk(
  "addresses/addNewAddress",
  async (newAddress : INewAddress, thunkAPI) => {
    try {
      const res = await addressApi.addNewAddress(newAddress);
      
      return res;
      
    } catch (error) {
      const err = error as IErrorFromAPI;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const addressSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
      addNewUser (state, {payload} : PayloadAction<INewAddress>){
        state.newAddress.push(payload)
      },

    },
    extraReducers: (builder) => {
      builder.addCase(fetchAllAddress.fulfilled, (state, { payload }) => {
          state.addresses = payload
      });
  
      builder.addCase(fetchAllAddress.rejected, (state, action) => {

      });
    },
  });
  
  const { actions, reducer } = addressSlice;
  
  export const {
    
  } = actions;
  
  export default reducer;
  