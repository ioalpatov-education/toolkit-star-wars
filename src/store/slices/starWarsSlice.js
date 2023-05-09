import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facts: [
    "прообразом Чубакки стал пёс режиссёра",
    "актёрам разрешили подобрать любимый цвет для своих световых мечей",
    "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
    "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
    "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
  ],
  filteredFacts: [],
};

export const starWarsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeFilteredFacts: (state, action) => {
      const amount = action.payload;
      state.filteredFacts = state.facts.slice(0, amount);
    },
  },
});

export const { changeFilteredFacts } = starWarsSlice.actions;

export default starWarsSlice.reducer;
