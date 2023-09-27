import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../interface/AppConfig.interface';
import { APP_CONFIG_SERVICE } from './appconfig.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) { }

  private loggedUser = new BehaviorSubject<any>(null);
  _loggedUser$ = this.loggedUser.asObservable()

   setUserLoggedIn(user:any) {
    this.loggedUser.next(user)
  }

  userSignIn(userData: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.config.serverUrl}/user/login`, userData)
  }

  getLoggedUserInformation(userData: { email: string }): Observable<any> {
    return this.http.post<any>(`${this.config.serverUrl}/user/logged`, userData)
  }
}
