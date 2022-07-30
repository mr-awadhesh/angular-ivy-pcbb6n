import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { QuotesComponent } from './components/quotes/quotes.component';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, QuotesComponent, QuoteDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
