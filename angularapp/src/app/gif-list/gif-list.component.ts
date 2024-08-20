import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
})
export class GifListComponent implements OnInit {
  title: string = '';
  gifs: any[] = [];

  constructor(private _giphyService: GiphyService) {}

  ngOnInit(): void {
    this._giphyService.getTrendingGifs().subscribe((res: { data: any[] }) => {
      console.log('Giphy Trending', res);
      this.gifs = res.data;
    });
  }
}
