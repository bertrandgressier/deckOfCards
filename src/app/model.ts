export enum Suit {
  HEART = 'HEART',
  SPADE = 'SPADE',
  CLUB = 'CLUB',
  DIAMOND = 'DIAMOND'
}

export interface Card {
  readonly suit: Suit;
  readonly value: number;
}

export type Deck = Card[];

export interface DeckOfCardsState {
  cards: Deck;
}

