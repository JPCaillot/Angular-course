import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GameControlComponent implements OnInit {
  gameInterval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  counter: number = 0;
  counterArray: number[] = [];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {
  }

  ngOnInit(): void {}

  onStartGame() {
    this.gameInterval = setInterval(() => {
      this.counterArray.push(++this.counter);
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.gameInterval);
    this.counter = 0;
    this.counterArray = [];
  }


}
