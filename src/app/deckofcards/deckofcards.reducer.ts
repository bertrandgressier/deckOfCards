import {DeckOfCardsState} from '../model';
import {DeckofcardsActions, DeckOfCardsType} from './deckofcards.action';
import {createSelector} from '@ngrx/store';
import {RootState} from '../app.reducers';

const initialState: DeckOfCardsState = {
  cards: []
};

export const deckOfCardsReducer = (state: DeckOfCardsState = initialState, action: DeckofcardsActions): DeckOfCardsState => {

  switch (action.type) {

    case DeckOfCardsType.SHUFFLE:
      return {
        cards: []
      };
    case DeckOfCardsType.ADD_CARD_IN_DECK:
      return {
        cards: [...state.cards, action.card]
      };
    default:
      return state;
  }
};

export const selectDeckOfCards = (state: RootState) => state.deckOfCards;

export const selectDeckOfCardsCards = createSelector(
  selectDeckOfCards,
  (state: DeckOfCardsState) => state.cards
);
