import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.usersService.inactiveUsers;
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    // this.userSetToActive.emit(id);
  }
}
