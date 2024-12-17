import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Members';
  users = DUMMY_USERS;
  name: string = '';
  selectedUserId! :string ;
  get selectedUser() {
    return this.users.find(x=>x.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log("selected user :" + id);
  }
}
