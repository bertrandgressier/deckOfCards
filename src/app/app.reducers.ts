import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import {DeckOfCardsState} from './model';
import {deckOfCardsReducer} from './deckofcards/deckofcards.reducer';

export interface State {
  deckOfCards: DeckOfCardsState;
}

export const reducers: ActionReducerMap<State> = {
  deckOfCards: deckOfCardsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
