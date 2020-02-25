import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: '<div>HelloComponent<br/><button (click)="click()">hello1</button></div>'
})
export class HelloComponent {
  constructor(private router: Router) {}
  click() {
    this.router.navigate(['/hello1']);
  }
}
