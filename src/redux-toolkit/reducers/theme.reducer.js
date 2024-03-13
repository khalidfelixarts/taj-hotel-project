import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const { mode } = action.payload;
      state.theme = mode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
