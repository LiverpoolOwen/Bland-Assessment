import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CashCounterComponent } from './cash-counter/cash-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CashCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [CashCounterComponent]
})
export class AppModule { }
