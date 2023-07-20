import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-number',
  templateUrl: './odd-number.component.html',
  styleUrls: ['./odd-number.component.css'],
})
export class OddNumberComponent {
  @Input() counterArray: number[]; //not even needed
  @Input() number: number;

  constructor() {}
}
