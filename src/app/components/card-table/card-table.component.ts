import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Deck, DeckOfCardsState} from '../../model';
import {Observable} from 'rxjs';
import {selectDeckOfCardsCards} from '../../deckofcards/deckofcards.reducer';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {

  cards$: Observable<Deck>;

  constructor(private store: Store<DeckOfCardsState>) {
    this.cards$ = store.pipe(select(selectDeckOfCardsCards));
  }

  ngOnInit() {
  }

}
