import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {AddCardOnTableAction, DeckIsEmptyAction, DeckofcardsActions, DeckOfCardsType} from './deckofcards.action';
import {mergeMap, tap} from 'rxjs/operators';
import {DeckOfCardsService} from './deckofcards.service';

@Injectable()
export class DeckOfCardsEffects {
  constructor(private actions$: Actions, private deckOfCardsService: DeckOfCardsService) {
    // shuffle cards at the beginning
    deckOfCardsService.shuffle();
  }

  @Effect()
  dealOneCard: Observable<DeckofcardsActions> = this.actions$.pipe(
    ofType(DeckOfCardsType.DEAL_CARD),
    mergeMap(() => {
      const card = this.deckOfCardsService.dealOneCard();
      if (card == null) {
        return of(new DeckIsEmptyAction());
      } else {
        return of(new AddCardOnTableAction(card));
      }
    }));

  @Effect({dispatch: false})
  shuffle = this.actions$.pipe(
    ofType(DeckOfCardsType.SHUFFLE),
    tap(() => this.deckOfCardsService.shuffle()));
}
