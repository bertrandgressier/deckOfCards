import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {DeckOfCardsEffects} from './deckofcards.effects';
import {AddCardOnTableAction, DealCardAction, DeckIsEmptyAction, ShuffleAction} from './deckofcards.action';
import {cold, hot} from 'jasmine-marbles';
import {DeckOfCardsService} from './deckofcards.service';
import {Suit} from '../model';

describe('DeckOfCardsEffects', () => {
  let actions$: Observable<any>;
  let effects: DeckOfCardsEffects;

  let mockService;

  beforeEach(() => {
    mockService = {
      shuffle: jasmine.createSpy(),
      dealOneCard: jasmine.createSpy()
    };

    TestBed.configureTestingModule({
      providers: [
        DeckOfCardsEffects,
        provideMockActions(() => actions$),
        {provide: DeckOfCardsService, useValue: mockService}
      ]
    });

    effects = TestBed.get(DeckOfCardsEffects);
  });

  it('should shuffle when service is created', () => {

    // Then
    expect(mockService.shuffle).toHaveBeenCalled();
  });

  it('should trigger shuffle  effects when SHUFFLE action', () => {

    // Given
    const action = new ShuffleAction();
    mockService.shuffle.calls.reset();
    actions$ = hot('--a-', {a: action});
    const expected = cold('--b', {b: action});

    // When
    expect(effects.shuffle).toBeObservable(expected);

    // Then
    expect(mockService.shuffle).toHaveBeenCalled();
  });

  it('should trigger dealOneCard effects when DEAL_CARD action', () => {
    // Given
    const action = new DealCardAction();
    const card = {suit: Suit.HEARTS, value: 5};
    const expectedAction = new AddCardOnTableAction(card);
    mockService.dealOneCard.and.returnValue(card);

    actions$ = hot('--a-', {a: action});
    const expected = cold('--b', {b: expectedAction});

    // When
    expect(effects.dealOneCard).toBeObservable(expected);

    // Then
    expect(mockService.dealOneCard).toHaveBeenCalled();
  });

  it('should trigger dealOneCard effects when DEAL_CARD action and Deck is empty', () => {
    // Given
    const action = new DealCardAction();
    const expectedAction = new DeckIsEmptyAction();
    mockService.dealOneCard.and.returnValue(null);

    actions$ = hot('--a-', {a: action});
    const expected = cold('--b', {b: expectedAction});

    // When
    expect(effects.dealOneCard).toBeObservable(expected);

    // Then
    expect(mockService.dealOneCard).toHaveBeenCalled();
  });
});
