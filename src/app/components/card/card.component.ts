import {Component, Input, OnInit} from '@angular/core';
import {Card, Suit} from '../../model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardName: string;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set card(card: Card) {
    // set svg file to draw
    this.cardName = `${this.tranformValuetoCardValue(card.value)}_of_${card.suit.toLowerCase()}`;
  }

  private tranformValuetoCardValue(value: number): string {

    switch (value) {
      case 1:
        return 'ace';
      case 11:
        return 'jack';
      case 12:
        return 'queen';
      case 13:
        return 'king';
      default:
        return value.toString();
    }
  }
}
