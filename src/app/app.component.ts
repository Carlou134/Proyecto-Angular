import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ColorButtonComponent } from './color-button/color-button.component';
import { CommonModule } from '@angular/common';
import { RotateDirective } from './rotate.directive';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserEditorComponent,
    UserDisplayComponent, ColorButtonComponent, CommonModule, RotateDirective,
    HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Angular';
  theme = "light";
  userName = "Carlos";
  isActive = false;
  fontSize = 16;

  changeTheme($event: Event){
    this.theme = (this.theme == "light") ? "dark" : "light";
    console.log($event);
    console.log($event.target);

    if(this.theme == "light") {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
    }
    else {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }

  aumentarSize(){
    this.fontSize++;
  }

  disminuirSize(){
    this.fontSize--;
  }
}
