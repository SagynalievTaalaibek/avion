import { CardsI } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';

interface CardsState {
  cards: CardsI[];
}

const initialState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addOrUpdateCard: (state, action: PayloadAction<CardsI>) => {
      const existingCard = state.cards.find(
        (card) => card.id === action.payload.id,
      );
      if (existingCard) {
        existingCard.quantity += action.payload.quantity;
      } else {
        state.cards.push(action.payload);
      }
    },
    incrementCardQuantity: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      const existingCard = state.cards.find((card) => card.id === cardId);
      if (existingCard) {
        existingCard.quantity = (
          parseFloat(existingCard.quantity) + 1
        ).toString();
      }
    },
    decrementCardQuantity: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      const existingCard = state.cards.find((card) => card.id === cardId);
      if (existingCard) {
        const newQuantity = parseFloat(existingCard.quantity) - 1;
        existingCard.quantity = newQuantity > 0 ? newQuantity.toString() : '0';
      }
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const selectCards = (state: RootState) => state.cards.cards;
export const { addOrUpdateCard, incrementCardQuantity, decrementCardQuantity } =
  cardsSlice.actions;
