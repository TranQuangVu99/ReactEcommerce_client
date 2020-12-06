import productReducer from "features/Products/productSlice";
import cartReducer from "features/Cart/cartSlice";
import accountReducer from "features/Account/accountSlice";
import paymentReducer from "features/Payment/paymentSlice";
import orderHistoryReducer from "features/OrderHistory/orderHistorySlice";
import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

//tạo reducer tổng
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  account: accountReducer,
  payment: paymentReducer,
  orderHistory: orderHistoryReducer,
});

// khởi tạo store
const store = configureStore({
  reducer: rootReducer,
});

// interface = type
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

// tải ra thành module
export default store;
