import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  counter: number;
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.counter = this.counterService.inactiveToActiveCounter;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    // this.userSetToActive.emit(id);
    this.counterService.inactiveToActiveTransfer();
    this.counter = this.counterService.inactiveToActiveCounter;
  }
}
