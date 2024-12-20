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
  },
});

export const { addCourseToProfile } = profileSlice.actions;

export default profileSlice.reducer;
