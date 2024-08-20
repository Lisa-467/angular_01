import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  AfterContentInit,
  ElementRef,
  AfterContentChecked,
  ViewChild,
  ContentChild,
  ViewChildren,
  QueryList,
  OnDestroy,
} from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecyclehook',

  templateUrl: './lifecyclehook.component.html',

  styleUrls: ['./lifecyclehook.component.css'],
})
export class LifecyclehookComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input()
  color!: string;
  @ContentChild('projectedContent', { static: true }) content!: ElementRef;
  @ViewChild('childhook') viewChild!: ElementRef;
  items = ['item1', 'item2', 'item3'];
  @ViewChildren('firstInput') inputs!: QueryList<any>;
  counter: any;
  num: number = 1;
  subscription: Subscription = new Subscription();

  constructor(private _giphyService: GiphyService) {}

  ngOnInit(): void {
    console.log('ngOnInIt called', this.color);

    // Fetch the initial data from an API .

    this.subscription = this._giphyService
      .getTrendingGifs()
      .subscribe((res) => {
        console.log('giphy from likecyclehook comp', res);
      });
    // this.counter = setInterval(() => {
    //   this.num = this.num + 1;
    //   console.log(this.num);
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called ', changes);

    if (changes['color']) {
      console.log('data changed', changes['color'].currentValue);
    }
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');

    console.log('projected content', this.content.nativeElement.textContent);

    // you can perform operations on the projected content .

    this.content.nativeElement.style.color = 'color';
  }
  ngAfterContentChecked(): void {
    console.log('NgAfterContentChecked called');
    this.content.nativeElement.setAttribute('style', `color:${this.color}`);
  }
  ngAfterViewInit(): void {
    console.log('View Intialized');
    if (this.inputs.first) {
      this.inputs.first.nativeElement.focus();
    }

    console.log('ngAfterViewInit called', this.viewChild);

    this.viewChild.nativeElement.setAttribute('style', `color:${this.color}`);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called', this.viewChild);

    this.viewChild.nativeElement.setAttribute('style', `color:${this.color}`);
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
    clearInterval(this.counter);
    this.subscription.unsubscribe;
  }
}
