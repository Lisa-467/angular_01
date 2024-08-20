import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css'],
})
export class BiodataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(registerForm: NgForm) {
    console.log('Register Form', registerForm.value);

    //api/Register(registerForm.value);
  }
}
