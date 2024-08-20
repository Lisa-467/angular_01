import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  // Injected the HttpClinet service
  url =
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-newsfeed?category=generalnews&region=UK';
  users = [
    { id: 1, name: 'jack', isActive: false },
    { id: 2, name: 'shree', isActive: true },
    { id: 3, name: 'shyam', isActive: true },
    { id: 4, name: 'rudra', isActive: false },
    { id: 5, name: 'dhruv', isActive: true },
  ];

  constructor(private _httpClient: HttpClient) {}
  // Inject the httpclient

  getPosts() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getDataFinance(): Observable<any> {
    let rapidAPIHeaders = new HttpHeaders({
      'x-rapidapi-key': '3d71bccbf9mshacd4a72e8f94359p195c32jsn3ea88695863e',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    });

    return this._httpClient.get(this.url, { headers: rapidAPIHeaders });
  }

  getCustomData(): Observable<string[]> {
    return of(['Angular', 'Javascript', '.Net']);
  }
  getUsers() {
    return of(this.users).pipe(
      map((users) => users.filter((users) => users.isActive)),
      catchError((error) => {
        console.log('error fetching user :', error);
        return of([]);
      })
    );
  }
}
