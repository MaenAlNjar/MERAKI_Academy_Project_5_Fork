import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action) => {
        state.cards = action.payload;
    },
  },
});
export const {setCards} = cardsSlice.actions;
export default cardsSlice.reducer;
       