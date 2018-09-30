import {DeckOfCardsState} from '../model';
import {DeckofcardsAction} from './deckofcards.action';

const initialState: DeckOfCardsState = {
  cards: []
};

export const deckOfCardsReducer = (state: DeckOfCardsState = initialState, action: DeckofcardsAction): DeckOfCardsState => {

  switch (action.type) {

    default:
      return state;
  }
};
