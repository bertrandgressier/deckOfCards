import {Action} from '@ngrx/store';
import {Card} from '../model';

export enum DeckOfCardsType {
  DEAL_CARD = 'Deal a card',
  SHUFFLE = 'Shuffle',
  ADD_CARD_IN_DECK = 'Add card in deck',
  DECK_IS_EMPTY = ' Deck is empty'
}

export class DealCardAction implements Action {
  readonly type = DeckOfCardsType.DEAL_CARD;
}

export class ShuffleAction implements Action {
  readonly type = DeckOfCardsType.SHUFFLE;
}

export class DeckIsEmptyAction implements Action {
  readonly type = DeckOfCardsType.DECK_IS_EMPTY;
}

export class AddCardInDeckAction implements Action {
  readonly type = DeckOfCardsType.ADD_CARD_IN_DECK;
  constructor(public card: Card) {
  }
}

export type DeckofcardsActions = DealCardAction | ShuffleAction | AddCardInDeckAction | DeckIsEmptyAction;
