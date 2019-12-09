import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === 'manish' && password === 'abc123') {
      sessionStorage.setItem('authenticatorUser', username)
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('authenticatorUser') !== null
  }

  logout() {
    sessionStorage.removeItem('authenticatorUser');
  }
}
