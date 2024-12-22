import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCourses: [], 
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addCourseToProfile: (state, action) => {
      state.userCourses.push(action.payload); // add Course into list
    },
    removeFromProfile: (state, action) => {
      state.userCourses = state.userCourses.filter(
        (item) => item._id !== action.payload
      ); // delete with id
    },
  },
});

export const { addCourseToProfile, removeFromProfile } = profileSlice.actions;

export default profileSlice.reducer;
