import { Component, VERSION } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  countDown: Subscription;
  counter = 5;
  graphFlag = 1;
  ngOnInit() {
    this.countDown = timer(1000, 1000).subscribe(() => {
      if (this.counter === 0) {
        this.counter = 5;
        this.graphFlag = this.graphFlag === 1 ? 2 : 1;
      } else {
        --this.counter;
      }
    });
  }
  ngOnDestroy() {
    this.countDown.unsubscribe();
  }
  public onStop(): void {
    this.countDown.unsubscribe();
  }
}
