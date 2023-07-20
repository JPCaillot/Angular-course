import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.usersService.inactiveUsers;
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
