import { TestBed } from '@angular/core/testing';

import { DeckOfCardsService } from './deckofcards.service';

fdescribe('DeckOfCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created all default cards ', () => {
    const service: DeckOfCardsService = TestBed.get(DeckOfCardsService);
    expect(service).toBeTruthy();

    expect(service.cards).toBeDefined();
    expect(service.cards.length).toEqual(52);
  });
});
