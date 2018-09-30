export enum Suit {
  HEARTS = 'HEARTS',
  SPADES = 'SPADES',
  CLUBS = 'CLUBS',
  DIAMONDS = 'DIAMONDS'
}

export interface Card {
  readonly suit: Suit;
  readonly value: number;
}

export type Deck = Card[];

export interface DeckOfCardsState {
  cards: Deck;
}

