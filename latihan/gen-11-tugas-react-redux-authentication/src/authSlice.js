import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")),
  token: localStorage.getItem("token"),
  isLogin: localStorage.getItem("token") != null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAfterLogin(state, action) {
      state.userData = action.payload;
      state.token = action.payload.token;
      localStorage.setItem("userData", JSON.stringify(action.payload));
      localStorage.setItem("token", action.payload.token);
      state.isLogin = action.payload.token ?? null;
    },

    handleLogout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      state.userData = {};
      state.token = null;
      state.isLogin = null;
    },
  },
});

export const { handleAfterLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
