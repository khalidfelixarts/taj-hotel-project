import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
