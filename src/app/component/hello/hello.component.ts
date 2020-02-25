import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: '<div>HelloComponent<br/><button (click)="click()">back to login</button></div>'
})
export class HelloComponent {
  constructor(private router: Router) {}
  click() {
    this.router.navigate(['/']);
  }
}
