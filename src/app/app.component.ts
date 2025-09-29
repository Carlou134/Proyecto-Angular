import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserDisplayComponent } from './user-display/user-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserEditorComponent, UserDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Angular';
  theme = "light";
  userName = "Carlos";

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
}
