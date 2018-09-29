import {Injectable} from '@angular/core';
import {Card, Suit} from './model';

@Injectable({
  providedIn: 'root'
})

export class DeckOfCardsService {

  readonly CARD_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  cards: Card[];

  constructor() {
    this.cards = this.initializeDefaultDeck();
  }

  // IDEA: to increase performance, Cards could be an enum with 52 cards
  initializeDefaultDeck(): Card[] {

    const initializeCards = [];
    Object.keys(Suit)
      .forEach(suit => {
        initializeCards.push(...this.CARD_VALUE.map(cardValue => ({suit: suit, value: cardValue})));
      });
    return initializeCards;
  }
}
