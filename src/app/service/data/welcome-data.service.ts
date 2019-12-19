import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get('https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.httpClient.get(`https://8080-f5233174-1bd3-4077-b0a1-0a846cbf243c.ws-ap01.gitpod.io/hello-world/path-variable/${name}`);
  }
}
