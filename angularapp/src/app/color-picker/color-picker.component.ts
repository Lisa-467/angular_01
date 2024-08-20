import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  selectedColor: string = '#ffffff'; // Initial color
  @Output() colorChange = new EventEmitter<string>(); // Event emitter for color changes
  constructor() {}

  ngOnInit(): void {}
  onColorSelected(newColor: any) {
    this.selectedColor = newColor.target.value;
    console.log('new color', this.selectedColor);
    this.colorChange.emit(this.selectedColor);
  }
}
