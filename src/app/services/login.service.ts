import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../data/demo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  tryToDoLogin(username:string, password:string): Observable<AuthResponse> {
    const loginRequest = { username, password };
    return this.httpClient.post<AuthResponse>('https://localhost:8080/login', loginRequest);
  }

}
