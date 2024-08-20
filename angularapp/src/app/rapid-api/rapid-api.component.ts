import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapid-api',
  templateUrl: './rapid-api.component.html',
  styleUrls: ['./rapid-api.component.css'],
})
export class RapidApiComponent implements OnInit {
  _rapidAPIService: any;
  constructor(private _rapidService: RapidapiService) {}
  res1: any = {};
  ngOnInit(): void {
    // this._rapidService.getDataFinance().subscribe((res: any) => {
    //   console.log('Rapid API', res);
    //   this.res1 = res;
    //   // console.log(res.items.result[0].author);
    // });
    this._rapidAPIService.getStockHistory().subscribe((res: any) => {
      console.log('res from rapid api StockHistory', res);
    });

    this._rapidAPIService.getMarketNews().subscribe((res: any) => {
      console.log('res from rapid api MarketNews', res);
    });

    this._rapidAPIService.getinsiderTraders().subscribe((res: any) => {
      console.log('res from rapid api Traders', res);
    });
  }
}
