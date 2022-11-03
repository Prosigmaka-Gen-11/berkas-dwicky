import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Chainsaw Man",
  type: "Anime",
  author: "Orang Jepang",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    ubahJudul(state) {
      state.title;
    },
  },
});

export const { ubahJudul } = bookSlice.actions;
export default bookSlice.reducer;
