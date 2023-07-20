import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  counter: number;
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.counter = this.counterService.activeToInactiveCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    // this.userSetToInactive.emit(id);
    this.counterService.activeToInactiveTransfer();
    this.counter = this.counterService.activeToInactiveCounter;
  }
}
