import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  activeToInactiveTransfer() {
    ++this.activeToInactiveCounter;
  }

  inactiveToActiveTransfer() {
    ++this.inactiveToActiveCounter;
  }
}
