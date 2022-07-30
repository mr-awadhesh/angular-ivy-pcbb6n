import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote, Quotes } from './components/quotes/quotes.component';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private _url = 'https://dummyjson.com/quotes';
  constructor(private _httpClient: HttpClient) {}
  getQuotes = (): Observable<Quotes> => {
    return this._httpClient.get<Quotes>(this._url);
  };

  getDetails = (quoteId):Observable<Quotes> => {
    return this._httpClient.get<Quotes>(`https://dummyjson.com/quotes/${quoteId}`);
  }
}
