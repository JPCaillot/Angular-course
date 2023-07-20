import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { decrement, increment, set } from "./counter.actions";

const initialState = 0;

// Newer way:
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value), //always produce a new value, don't directly change it
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value),

);

// AppModule:
// imports: [..., StoreModule.forRoot({
//   counter: counterReducer,
//   ...
// })]

// Older way:
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
