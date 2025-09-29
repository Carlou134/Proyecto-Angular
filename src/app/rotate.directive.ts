import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]',
  standalone: true
})
export class RotateDirective {
  @Input() appRotate = 180;

  constructor(element: ElementRef) {
    element.nativeElement.style.transform = `rotate(${this.appRotate}deg)`;
   }

}
