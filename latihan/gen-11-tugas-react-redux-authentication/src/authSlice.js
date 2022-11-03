import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  token: null,
  isLogin: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAfterLogin(state, action) {
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      localStorage.setItem("userData", JSON.stringify(state.userData));
      localStorage.setItem("token", state.token);
      state.isLogin = action.payload.token ?? null;
    },

    handleLogout(state, action) {
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
