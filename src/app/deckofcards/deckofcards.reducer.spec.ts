import {deckOfCardsReducer} from './deckofcards.reducer';
import {AddCardOnTableAction, DeckIsEmptyAction, ShuffleAction} from './deckofcards.action';
import {Card, Suit} from '../model';

describe('DeckOfCards Reducer', () => {

  let reducer;

  beforeEach(() => {
    reducer = deckOfCardsReducer;
  });

  it('should change state with ShuffleAction', () => {

    // Given
    const action = new ShuffleAction();

    // When
    const state = reducer(null, action);

    // Then
    expect(state.cards).toEqual([]);
  });

  it('should change state with AddCardOnTableAction', () => {

    // Given
    const card1: Card = {suit: Suit.HEARTS, value: 5};
    const card2: Card = {suit: Suit.CLUBS, value: 8};
    const action1 = new AddCardOnTableAction(card1);
    const action2 = new AddCardOnTableAction(card2);
    const initialState = {
      cards: []
    };

    // When
    const state1Step = reducer(initialState, action1);

    // Then
    expect(state1Step.cards).toEqual([card1]);

    // When
    const state2Step = reducer(state1Step, action2);

    // Then
    expect(state2Step.cards).toEqual([card1, card2]);
  });

  it('should state no change with DeckIsEmptyAction action', () => {

    // Given
    const action = new DeckIsEmptyAction();
    const initialState = {
      cards: [{suit: Suit.HEARTS, value: 5}]
    };

    // When
    const state = reducer(initialState, action);

    // Then
    expect(state).toEqual(initialState);
  });
});
