import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/root/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {CardComponent} from './components/card/card.component';
import {CardTableComponent} from './components/card-table/card-table.component';
import {CardMenuComponent} from './components/card-menu/card-menu.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DeckOfCardsEffects} from './deckofcards/deckofcards.effects';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTableComponent,
    CardMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([DeckOfCardsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
