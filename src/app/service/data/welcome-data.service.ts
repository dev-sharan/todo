import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get('https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )

    return this.httpClient.get(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/hello-world/path-variable/${name}`,
    {headers}
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'manish'
    let password = 'dummy'

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    return basicAuthHeaderString;
  }

  // Access to XMLHttpRequest at
  /* 'https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/hello-world-bean'
      from origin 'https://4200-f794a780-4bf4-48eb-a5ac-3794b0833f93.ws-ap01.gitpod.io'
      has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  */
}
