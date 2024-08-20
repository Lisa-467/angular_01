import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RapidapiService {
  url =
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-newsfeed?category=generalnews&region=US';
  urlStockHistory =
    'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history?symbol=AAPL&interval=5m&diffandsplits=false';
  urlMarketNews =
    'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/news?tickers=AAPL%2CTSLA';
  urlTrader =
    'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/insider-trades';

  // Inject the httpclient
  constructor(private _httpClient: HttpClient) {}
  getDataFinance(): Observable<any> {
    let rapidAPIHeaders = new HttpHeaders({
      'x-rapidapi-key': 'f404fb974bmsh1dcb8590465ac1fp1a02cdjsn5a033bee7f5e',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    });

    return this._httpClient.get(this.url, { headers: rapidAPIHeaders });
  }
  getStockHistory() {
    return this._httpClient.get(this.urlStockHistory);
  }

  getMarketNews() {
    return this._httpClient.get(this.urlMarketNews);
  }

  getinsiderTraders() {
    return this._httpClient.get(this.urlTrader);
  }
}
