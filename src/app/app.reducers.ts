import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import {DeckOfCardsState} from './model';
import {deckOfCardsReducer} from './deckofcards/deckofcards.reducer';

export interface RootState {
  deckOfCards: DeckOfCardsState;
}

export const reducers: ActionReducerMap<RootState> = {
  deckOfCards: deckOfCardsReducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
