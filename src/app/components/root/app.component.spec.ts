import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CardTableComponent} from '../card-table/card-table.component';
import {CardMenuComponent} from '../card-menu/card-menu.component';
import {CardComponent} from '../card/card.component';
import {MatToolbar} from '@angular/material';

// TODO Need to be mock correclty
xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardTableComponent,
        CardMenuComponent,
        CardComponent,
        MatToolbar
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
