import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Angular';
  theme = "light";

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
