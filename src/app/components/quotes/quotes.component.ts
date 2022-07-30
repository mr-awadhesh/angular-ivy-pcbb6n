import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../quote.service';
export interface Quotes {
  quotes: {
    id: number;
    quote: string;
  };
}
export interface Quote {
  id: number;
  quote: string;
}
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  constructor(private _quotesService: QuoteService) {}

  qoute: Quote = {
    id: 0,
    quote: '',
  };

  quotesArr: any = [];

  ngOnInit() {
    this._quotesService.getQuotes().subscribe((data: Quotes) => {
      console.log(data);
      this.quotesArr = data.quotes;
      console.log(this.quotesArr);
    });
  }

  id: number = 0;
  quote:string = '';
  onClick = (quote) => {
    this.id = quote.id;
    this.quote = quote.quote;
  };
}
