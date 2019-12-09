import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidMsg = '';

  constructor(private router: Router, private authen: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  onBtnClick() {
    if(this.authen.authenticate(this.username, this.password)) {
      this.router.navigate(['/welcome', this.username]);
    }
    else {
      this.invalidMsg = "invalid credentials";
    }
  }

}
