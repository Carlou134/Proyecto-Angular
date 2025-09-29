import { Component } from '@angular/core';

@Component({
  selector: 'app-color-button',
  standalone: true,
  imports: [],
  host: {
    '(click)': 'toggleActive($event)',
    '[style.background-color]': 'isActive ? "red" :"green"'
  },
  templateUrl: './color-button.component.html',
  styleUrl: './color-button.component.css'
})
export class ColorButtonComponent {
  isActive = false;
  clickCount = 0;

  toggleActive($event: Event){
    this.isActive = true;
    this.clickCount++;
    console.log(this.isActive);
    console.log(this.clickCount);
  }
}
