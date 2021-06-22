import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridCardComponent } from './views/grid-card/grid-card.component';
import { ListCardComponent } from './views/list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GridCardComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
