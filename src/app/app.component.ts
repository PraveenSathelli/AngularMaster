import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Members';
  users= DUMMY_USERS;

  onSelectUser(id:string)
  {
console.log("selected user :"+ id);
  }
}
