import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  apiUrl =
    'https://api.giphy.com/v1/gifs/trending?api_key=AN9LENn6Kd6qpZfqCkpOVdePYjUqb1Pe&limit=200&offset=0&rating=g&bundle=messaging_non_clips';

  // inject the httpclinet
  constructor(private _httpClient: HttpClient) {}

  getTrendingGifs(): Observable<any> {
    return this._httpClient.get<any>(this.apiUrl);
  }
}
