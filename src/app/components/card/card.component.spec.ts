import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {Suit} from '../../model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find card name with card value', () => {
    component.card = {suit: Suit.DIAMONDS, value: 3};
    fixture.detectChanges();
    expect(component.cardName).toEqual('3_of_diamonds');

    component.card = {suit: Suit.CLUBS, value: 1};
    fixture.detectChanges();
    expect(component.cardName).toEqual('ace_of_clubs');

    component.card = {suit: Suit.HEARTS, value: 11};
    fixture.detectChanges();
    expect(component.cardName).toEqual('jack_of_hearts');

    component.card = {suit: Suit.SPADES, value: 12};
    fixture.detectChanges();
    expect(component.cardName).toEqual('queen_of_spades');

    component.card = {suit: Suit.SPADES, value: 13};
    fixture.detectChanges();
    expect(component.cardName).toEqual('king_of_spades');
  });
});
