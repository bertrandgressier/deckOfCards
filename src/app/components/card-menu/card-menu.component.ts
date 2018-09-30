import {Component, OnInit} from '@angular/core';
import {DeckOfCardsState} from '../../model';
import {Store} from '@ngrx/store';
import {DealCardAction, ShuffleAction} from '../../deckofcards/deckofcards.action';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  constructor(private store: Store<DeckOfCardsState>) {
  }

  ngOnInit() {
  }

  shuffle() {
    this.store.dispatch(new ShuffleAction());
  }

  deal() {
    this.store.dispatch(new DealCardAction());
  }
}
