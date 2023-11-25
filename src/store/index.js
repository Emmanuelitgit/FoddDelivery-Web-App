import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { authSlice } from "./auth";
import { mealSlice } from "./mealSlice";
import { notificationSlice } from "./notification";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        meal: mealSlice.reducer,
        notification: notificationSlice.reducer
    }
})

export default store;