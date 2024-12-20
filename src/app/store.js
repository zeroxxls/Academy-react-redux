import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
import profileReducer from "../features/profileSlice";

export default configureStore({
    reducer:{
        user:userReducer,
        cart: cartReducer,
        profile: profileReducer,
    }
})