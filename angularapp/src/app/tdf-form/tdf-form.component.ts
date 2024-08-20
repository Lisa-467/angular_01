import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm) {
    console.log('TDF', myForm);
    
}
}
