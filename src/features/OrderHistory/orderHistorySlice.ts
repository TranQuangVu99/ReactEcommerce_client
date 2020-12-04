import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import orderHistoryApi from "app/api/orderHistory";
import { IErrorFromAPI } from "app/models/error";
import { IProductOrderHistory } from "app/models/orderHistory";


// gobal state
interface IOderHistoryState {
    orders: IProductOrderHistory[];
  }
  
const initialState: IOderHistoryState = {
  orders: [],
};

export const fetchAllOderHistory = createAsyncThunk(
    "product/fetchAllOderHistory",
    async (None,thunkAPI) => {
      try {
         const data = await orderHistoryApi.getAllOderHistory()
         return data.orders;
      } catch (error) {
        const err = error as IErrorFromAPI;
        return thunkAPI.rejectWithValue(err)
      }
    }
  );
  
  
const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState,
    reducers: {
      addNewProductOrderHistory(state, { payload }: PayloadAction<IProductOrderHistory>) {
        state.orders.push(payload);
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAllOderHistory.fulfilled, (state, {payload}) => {
          state.orders = payload
      });
  
      builder.addCase(fetchAllOderHistory.rejected, (state, action) => {
        // if (action.payload) {
        //   // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        //   state.error = action.payload.errorMessage
        // } else {
        //   state.error = action.error.message
        // }
      });
    },
  });
  
  const { actions, reducer } = orderHistorySlice;
  
  export const { addNewProductOrderHistory } = actions;
  
  export default reducer;