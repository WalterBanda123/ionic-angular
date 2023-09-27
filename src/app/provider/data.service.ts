import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_SERVICE } from './appconfig.service';
import { AppConfig } from '../interface/AppConfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) { }

  getAllUserTasks(id: string): Observable<any> {
    return this.http.get<any>(`${this.config.serverUrl}/task/user/${id}`)
  }
}
