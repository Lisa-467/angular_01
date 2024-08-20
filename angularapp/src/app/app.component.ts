import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';

  // Inject the Demo service

  constructor(private _demoService: DemoService) {
    this._demoService.getPosts().subscribe((res) => {
      console.log('from json server posts data', res);
    });

    // this._demoService.getPostMethod().subscribe(res =>{
    //   console.log('data from server',res);

    // })

    const myObservable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    myObservable.subscribe((res) => {
      console.log('myObservable', res);
    });
  }
}
