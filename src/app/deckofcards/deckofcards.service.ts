import {Injectable} from '@angular/core';
import {Card, Deck, Suit} from '../model';

@Injectable({
  providedIn: 'root'
})

export class DeckOfCardsService {

  readonly CARD_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  readonly defaultCards: Deck;

  currentDeck: Deck = [];

  constructor() {
    this.defaultCards = this.initializeDefaultDeck();
  }

  private static pickCardRandomlyAndRemoveToArray(cards): Card {
    const position = Math.floor(Math.random() * (cards.length - 1));
    return cards.splice(position, 1)[0];
  }

  // IDEA: to increase performance, Cards could be an enum with 52 cards
  private initializeDefaultDeck(): Deck {

    const initializeCards = [];
    Object.keys(Suit)
      .forEach(suit => {
        initializeCards.push(...this.CARD_VALUE.map(cardValue => ({suit: suit, value: cardValue})));
      });
    return initializeCards;
  }

  shuffle() {
    const workingDeckToShuffle = [...this.defaultCards];
    const newDeck = [];

    // push value in new array : pick randomly a card and remove it in working array
    while (workingDeckToShuffle.length !== 0 ) {
      const card = DeckOfCardsService.pickCardRandomlyAndRemoveToArray(workingDeckToShuffle);
      newDeck.push(card);
    }
    this.currentDeck = newDeck;
  }

  dealOneCard(): Card {
    if (this.currentDeck.length === 0) {
      return null;
    }
    return DeckOfCardsService.pickCardRandomlyAndRemoveToArray(this.currentDeck);
  }
}
