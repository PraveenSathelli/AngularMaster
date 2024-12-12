import { Component, EventEmitter, Input, Output } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User
{
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input({ required: true }) user !: {
    id: string;
    avatar: string;
    name: string;
  };
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
