import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: '<div>Hello1Component<br/><button (click)="click()">back1</button></div>'
})
export class Hello1Component {
  constructor(private router: Router) {}
  click() {
    this.router.navigate(['/']);
  }
}
