import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload; 
            state.loggedIn = true; 
        },
        logout: (state) => {
            state.user = null;
            state.loggedIn = false; 
        },
        signUp: (state, action) => {
            state.user = action.payload; 
            state.loggedIn = true;
        },
    },
});

export const { login, logout, signUp } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectLoggedIn = (state) => state.user.loggedIn;
export default userSlice.reducer;
