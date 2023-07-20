import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
// import { IncrementAction } from '../store/counter.actions';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  // constructor(private counterService: CounterService) {}
  constructor(private store: Store) {}

  increment() {
    // this.counterService.increment();
    this.store.dispatch(increment({value: 2}));
    // this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    // this.counterService.decrement();
    this.store.dispatch(decrement({value: 2}));
  }
}
