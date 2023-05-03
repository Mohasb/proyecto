import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css']
})
export class IncrementorComponent {
  number: number = 0;

  constructor() { }

  incrementNumber() {
    this.number += 1;
  }
}
