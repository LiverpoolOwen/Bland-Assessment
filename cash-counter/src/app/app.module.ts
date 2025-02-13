import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CashCounterComponent } from './cash-counter/cash-counter.component';

@NgModule({
  declarations: [
    CashCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CashCounterComponent]
})
export class AppModule { }
