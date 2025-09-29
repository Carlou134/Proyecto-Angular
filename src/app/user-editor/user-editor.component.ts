import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-editor',
  standalone: true,
  imports: [],
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.css'
})
export class UserEditorComponent {
  @Input() name: string = "";
  @Output() nameChange = new EventEmitter<string>();

  onChangeName($event: Event){
    const newName = ($event.target as HTMLInputElement).value;
    this.name = newName;
    this.nameChange.emit(this.name);
  }
}
