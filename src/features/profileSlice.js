import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCourses: [], // Список купленных курсов
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addCourseToProfile: (state, action) => {
      state.userCourses.push(action.payload); // Добавляем курс в список
    },
    removeFromProfile: (state, action) => {
      state.userCourses = state.userCourses.filter(
        (item) => item._id !== action.payload
      ); // Удаляем курс по ID
    },
  },
});

export const { addCourseToProfile, removeFromProfile } = profileSlice.actions;

export default profileSlice.reducer;
