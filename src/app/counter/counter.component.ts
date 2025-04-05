import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count: number = 0;

  handleCounter(value: string) {
    if (value == 'inc') {
      this.count = this.count + 1;
    } else if (value == 'dec') {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    } else {
      this.count = 0;
    }
  }
}
