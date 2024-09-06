import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import coinReducer from "./coins/coinSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    coin: coinReducer,
    cart: cartReducer,
  },
});

export default store;
