import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if (storedCounter) {
          return of(set({ value: +storedCounter })); //turns the function into an observable, required by switchMap
        }
        return of(set({ value: 0 })); // 'set' dispatches this new action, handled by the reducer
      })
    )
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)), //or 'counter'
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  ); //if it doesn't dispatch actions, include this

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}

// Older way:
// export class CounterEffects {

//   @Effect({dispatch: false}) //not supported anymore
//   saveCount = this.actions$.pipe(
//     ofType(increment, decrement),
//     tap((action) => {
//       console.log(action);
//       localStorage.setItem('count', action.value.toString());
//     })
//   ); //if it doesn't dispatch actions, include this

//   constructor(private actions$: Actions) {}
// }
