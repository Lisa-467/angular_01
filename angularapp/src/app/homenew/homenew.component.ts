import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.component.html',
  styleUrls: ['./homenew.component.css'],
})
export class HomenewComponent implements OnInit {
  constructor() {
    console.log('HomeModule called');
  }

  ngOnInit(): void {}
}
