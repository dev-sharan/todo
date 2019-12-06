import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidMsg = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBtnClick() {
    if(this.username === 'manish' && this.password === 'abc123') {
      this.router.navigate(['/welcome', this.username]);
    }
    else {
      this.invalidMsg = "invalid credentials";
    }
  }

}
