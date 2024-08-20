import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  // we need refrence of P tag here, ElementRef
  constructor(private el: ElementRef, private render: Renderer2) {
    // el is instance of ElementRef class
    // el.nativeElement.style.backgroundColor = 'blue';
    render.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }
}
