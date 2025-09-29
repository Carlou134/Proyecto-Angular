import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-display',
  standalone: true,
  imports: [],
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.css'
})
export class UserDisplayComponent {
  @Input() name:string = "";
  @Output() nameChange = new EventEmitter<string>();

  nameUpperCase(){
    this.name = this.name.toUpperCase();
    this.nameChange.emit(this.name);
  }
}
