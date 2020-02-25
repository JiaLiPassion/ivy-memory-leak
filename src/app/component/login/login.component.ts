import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: '<div>Login Component <br/><button (click)="click()">go to hello</button></div>'
})
export class LoginComponent implements OnDestroy {
  constructor(private router: Router) {}
  click() {
    this.router.navigate(['/hello']);
  }

  ngOnDestroy() {
    console.log('leave login');
  }
}
