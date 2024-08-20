import { Component, OnInit } from '@angular/core';
import { SwitchComponent } from './../switch/switch.component';

@Component({
  selector: 'app-dropdown-country',
  templateUrl: './dropdown-country.component.html',
  styleUrls: ['./dropdown-country.component.css'],
})
export class DropdownCountryComponent implements OnInit {
  countries: string[] = ['India', 'Japan'];
  states: { [key: string]: string[] } = {
    Japan: ['Chiba', 'Hiroshima', 'Fukui'],
    India: [
      'Maharashtra',
      'Odisha',
      'Gujrat',

      'Rajsthan',

      'Arunachal Pradesh',
      'Madhya Pradesh',
    ],
  };
  selectedCountry: string = '';
  availableStates: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCountryChange(): void {
    if (this.selectedCountry) {
      this.availableStates = this.states[this.selectedCountry];
    } else {
      this.availableStates = [];
    }
  }
}
