import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../../quote.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote : string = '';
  @Input()
  id : number = 0;
  constructor(private _quotesService: QuoteService,
    private _router:Router) { }

  ngOnInit() {

  }

  viewQuoteDetails = () => {
    this._router.navigateByUrl(`/details/${this.id}`);
      this._quotesService.getDetails(this.id)
      .subscribe((data)=> {
        console.log(data);        
      })
  }

}