import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-com',
  templateUrl: './reg-com.component.html',
  styleUrls: ['./reg-com.component.css'],
})
export class RegComComponent implements OnInit {
  @ViewChild('registrationForm') registrationForm!: NgForm;

  countries = [
    { countryId: 1, name: 'India' },
    { countryId: 2, name: 'Australia' },
  ];

  states = [
    { id: 1, name: 'Maharashtra', countryId: 1 },
    { id: 2, name: 'Goa', countryId: 1 },
    { id: 3, name: 'Gujrat', countryId: 1 },
    { id: 4, name: 'Victoria', countryId: 2 },
    { id: 5, name: 'New South Wales', countryId: 2 },
    { id: 6, name: 'Queensland', countryId: 2 },
  ];

  selectedCountryId = null;
  filteredStates: any[] = [];
  val = {
    email: 'Hello@codemind.com',
    password: '1230',
    address: {
      country: 'India',
      state: 'Maharashtra',
    },
  };
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // set the entrive form
      this.registrationForm.setValue(this.val);

      // set only one control
      // this.registrationForm.controls['email'].patchValue('codemind@gmail.com')
    }, 5000);
  }
  onSubmit(registerForm: NgForm) {
    console.log('Register Form', registerForm.value);

    //api/Register(registerForm.value);
  }
  onCountryChange() {
    if (this.selectedCountryId) {
      this.filteredStates = this.states.filter(
        (state) => state.countryId == this.selectedCountryId
      );
    } else {
      this.filteredStates = [];
    }
  }
}
