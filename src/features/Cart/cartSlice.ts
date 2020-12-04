import { ICartItem ,IProductsAndCarts} from "./types/cartItem";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "app/models/product";
import productApi from "app/api/product";
import { IErrorFromAPI } from "app/models/error";
import { AppDispatch, AppThunk } from "app/store";
import { history } from "index";

interface ICartState {
  carts: ICartItem[];
  products: IProduct[];
  priceShip : number,
  script : boolean
}

const initialState: ICartState = {
  carts: [],
  products: [],
  priceShip : 30000,
  script : false
};

export const fetchProductsByIds = createAsyncThunk(
  "cart/fetchProductsByIds",
  async (ids: string[], thunkAPI) => {
    try {
      const res = await productApi.getManyById(ids);
      return res.data;
    } catch (error) {
      const err = error as IErrorFromAPI;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const setDataCarts = () : AppThunk => async (dispatch:AppDispatch) => {
  try {
    const cartsJson = window.localStorage.getItem("carts");
      if (cartsJson) {
        const carts = JSON.parse(cartsJson) as ICartItem[];
        const ids = carts.map(cart =>
          cart.productID 
        )
        const res = await productApi.getManyById(ids);
        dispatch(setCartsAndProducts({carts: carts, products : res.data}))
      }else{
        history.push('/products')
      }
  } catch (err) {
    
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartsAndProducts (state , {payload} : PayloadAction<IProductsAndCarts>) {
      state.carts = payload.carts;
      state.products = payload.products
    },
    setScript(state , {payload} : PayloadAction<boolean>){
      state.script = payload
    },
    addNewItemCart(state, { payload }: PayloadAction<ICartItem>) {
      const index = state.carts.findIndex(
        (x) => x.productID === payload.productID
      );
      if (index !== -1) {
        state.carts[index].quantity += 1;
      } else {
        state.carts.push(payload);
      }
      const cartsJson = JSON.stringify(state.carts);
      window.localStorage.setItem("carts", cartsJson);
    },
    updateQuantity(state, { payload }) {
      const index = state.carts.findIndex(
        (x) => x.productID === payload.productID
      );
      if (index !== -1) {
        state.carts[index].quantity = payload.quantity;
      } else {
        state.carts.push(payload);
      }
      const cartsJson = JSON.stringify(state.carts);
      window.localStorage.setItem("carts", cartsJson);
    },
    
    checkCart(state) {
      const cartsJson = window.localStorage.getItem("carts");
      if (cartsJson) {
        const carts = JSON.parse(cartsJson) as ICartItem[];
        state.carts = carts;
      }
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      const index = state.carts.findIndex((x) => x.productID === payload);
      state.carts.splice(index, 1);
      state.products.splice(index, 1);
      const cartsJson = JSON.stringify(state.carts);
      window.localStorage.setItem("carts", cartsJson);
    },
    setPriceShip (state, {payload} : PayloadAction<number>){
      state.priceShip = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByIds.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.script = true
    });

    builder.addCase(fetchProductsByIds.rejected, (state, action) => {
      // if (action.payload) {
      //   // Being that we passed in ValidationErrors to rejectType in createAsyncThunk, the payload will be available here.
      //   state.error = action.payload.errorMessage
      // } else {
      //   state.error = action.error.message
      // }
    });
  },
});

const { actions, reducer } = cartSlice;

export const {
  addNewItemCart,
  checkCart,
  removeItem,
  updateQuantity,
  setPriceShip,
  setCartsAndProducts,
  setScript
} = actions;

export default reducer;