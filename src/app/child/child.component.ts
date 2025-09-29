import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childMessage = "";
  @Output() messageSent = new EventEmitter<string>();


  emitirMensaje(){
    this.messageSent.emit("Hola desde el hijo");
  }
}
