import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DeckofcardsEffects } from './deckofcards.effects';

describe('DeckofcardsEffects', () => {
  let actions$: Observable<any>;
  let effects: DeckofcardsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeckofcardsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DeckofcardsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
