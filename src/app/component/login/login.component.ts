import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div>
      Login Component <br />
      <button (click)="click()">click</button>
      <button (click)="click1()">click1</button>
    </div>
  `
})
export class LoginComponent implements OnDestroy, OnInit {
  constructor(private router: Router) {
    console.log('constructor Login');
  }

  ngOnInit() {
    console.log('ngOninit Login');
  }
  click() {
    this.router.navigate(['/hello']);
  }
  click1() {
    this.router.navigate(['/hello1']);
  }

  ngOnDestroy() {
    console.log('leave login');
  }
}
