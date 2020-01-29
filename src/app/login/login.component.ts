import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidMsg = '';

  constructor(private router: Router, private authen: HardcodedAuthenticationService, private basicAuth: BasicAuthenticationService) { }

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

  handleBasicAuthLogin() {
    // if(this.authen.authenticate(this.username, this.password)) {
      this.basicAuth.executeAuthenticationService(this.username, this.password).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/welcome', this.username]);
        },
        error => {
          console.log(error);
          this.invalidMsg = "invalid credentials";
        }
      )
  }


}
