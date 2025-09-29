import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '(click)': 'toggleHighlight()',
    '[style.background-color]': "isHighlighted ? 'white': highlightColor"
  }
})
export class HighlightDirective {
  @Input() highlightColor = "yellow";
  isHighlighted = false;

  constructor() { }

  toggleHighlight(){
    this.isHighlighted = this.isHighlighted ? false : true;
  }
}
