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
  users = DUMMY_USERS;
  name: string = '';
  onSelectUser(id: string) {
    let user = DUMMY_USERS.find(x => x.id == id);
    this.name = user?.name!;
    console.log("selected user :" + id);
  }
}
