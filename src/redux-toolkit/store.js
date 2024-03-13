import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import themeReducer from "./reducers/theme.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
