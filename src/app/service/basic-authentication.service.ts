import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    if(username === 'manish' && password === 'abc123') {
      sessionStorage.setItem('authenticatorUser', username)
      return true;
    }
    return false;
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )

    return this.httpClient.get<AuthenticationBean>(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/basicauth`,
     {headers}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatorUser', username);
          return data;
        }
      )
    );
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('authenticatorUser') !== null
  }

  logout() {
    sessionStorage.removeItem('authenticatorUser');
  }
}

export class AuthenticationBean {
    constructor(public message:string) {}
}
