import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone:true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports:[CardComponent]
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
