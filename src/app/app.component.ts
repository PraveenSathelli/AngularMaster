import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HeaderComponent,UserComponent,TasksComponent,NgFor]
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
