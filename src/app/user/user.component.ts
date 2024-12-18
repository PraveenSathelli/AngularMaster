import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  @Input({required:true}) selected!:boolean;
  @Input({ required: true }) user !: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
