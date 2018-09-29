import {TestBed} from '@angular/core/testing';

import {DeckOfCardsService} from './deckofcards.service';
import {Card, Deck} from '../model';

describe('DeckOfCardsService', () => {

  let service: DeckOfCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DeckOfCardsService);
  });

  it('should be created all default defaultCards ', () => {

    // then
    expect(service.defaultCards).toBeDefined();
    expect(service.defaultCards.length).toEqual(52);
  });

  it('should be shuffle a new deck of cards', () => {

    // When
    service.shuffle();

    // Then
    expect(service.currentDeck).toBeDefined();
    expect(service.currentDeck.length).toEqual(52);
    expect(service.currentDeck).not.toEqual(service.defaultCards);
  });

  it('should be have different deck if we shuffle twice', () => {
    // Given
    service.shuffle();
    const firstDeckShuffle: Deck = [...service.currentDeck];

    // When
    service.shuffle();

    // Then
    expect(service.currentDeck).not.toEqual(firstDeckShuffle);
  });

  it('should deal one card randomly and remove to deck', () => {

    // Given
    service.shuffle();
    expect(service.currentDeck.length).toEqual(52);

    // When
    const card: Card = service.dealOneCard();

    // Then
    expect(service.currentDeck.length).toEqual(51);
    expect(card).toBeDefined();
  });

  it('should remove card from deck when deal one card', () => {

    // Given
    service.shuffle();

    // When
    service.dealOneCard();
    service.dealOneCard();
    service.dealOneCard();

    // Then
    expect(service.currentDeck.length).toEqual(49);
  });

  it('should refill all cards in deck when shuffle after deal one card', () => {

    // Given
    service.shuffle();

    // When
    service.dealOneCard();

    // Then
    expect(service.currentDeck.length).toEqual(51);

    // When
    service.shuffle();

    // Then
    expect(service.currentDeck.length).toEqual(52);
  });

  it('should deal 53rd cards and should be null', () => {

    // Given
    service.shuffle();
    let cards = new Array(53).fill(null);

    // When
    cards = cards.map(() => service.dealOneCard());

    // Then
    expect(cards[51]).toBeDefined();
    expect(cards[52]).toBeNull();
  });
});
