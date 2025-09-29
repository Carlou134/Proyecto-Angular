import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ ChildComponent ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  mensaje:string = "";

  onMessageReceived(message: string){
    console.log(message);
    this.mensaje = message;
  }
}
