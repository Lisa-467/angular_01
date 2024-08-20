import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, filter, from, take } from 'rxjs';
import { DemoService } from '../services/demo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  randomName = ['lisa', 'jenny', 'rosie'];
  myForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  constructor(private _demoService: DemoService) {}

  // filter even numbers
  ngOnInit(): void {
    const myObs = from([1, 2, 3, 4, 5, 6, 7, 8]);
    myObs.pipe(filter((num: number) => num % 2 === 0)).subscribe((res) => {+-
      console.log(`Even Numbers: ${res}`);
    });
    this._demoService.getUsers().subscribe((res) => {
      console.log('get Active Users', res);
    });
    const data = from(this.randomName);
    data.pipe(take(1)).subscribe((result) => {
      console.log('take =>', result);
    });
    this.myForm.valueChanges.pipe(debounceTime(5000)).subscribe((res) => {
      console.log('after 5 sec', res);
    });
  }
}
