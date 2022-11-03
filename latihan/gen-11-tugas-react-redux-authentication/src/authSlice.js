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

    handleLogout(state) {
      state.userData = {};
      state.token = null;
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
    },
  },
});

export const { handleAfterLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
