import {Action} from '@ngrx/store';

export enum DeckOfCardsType {
  DEAL_CARD = 'Deal a card',
  SHUFFLE = 'Shuffle'
}

export class DealCardAction implements Action {
  readonly type = DeckOfCardsType.DEAL_CARD;
}

export class ShuffleAction implements Action {
  readonly type = DeckOfCardsType.SHUFFLE;
}

export type DeckofcardsAction = DealCardAction | ShuffleAction;
