import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';

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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
