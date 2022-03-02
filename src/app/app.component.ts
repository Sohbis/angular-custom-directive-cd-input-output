import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  greet: string = 'Hello';
  updateGreet(e) {
    this.greet = e
    console.log('e', e);
  }
}
