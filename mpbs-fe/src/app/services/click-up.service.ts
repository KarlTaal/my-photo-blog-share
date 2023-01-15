import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickUpService {
  readonly corsProxy: string = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: HttpClient) {
  }

  getUserAccessToken(authAcceptCode: string): Observable<any> {
    const clientId = 'WQG5JGVOE0G0C3U4A3JNAOJWZKIHJCAS';
    const secret = 'ZMJD623SPHE0SI9ICC6DT1XV1UKQ38A8VBTR8NVPRHX21LOVLJ267YF3JD34LV7V';
    return this.http.post<any>(this.corsProxy + `https://api.clickup.com/api/v2/oauth/token?client_id=${ clientId }&client_secret=${ secret }&code=${ authAcceptCode }`, null);
  }

  postNewTask(authToken: string): Observable<any> {
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ authToken }`,
    });

    const body = {
      'name': 'New Task Name',
      'description': 'New Task Description',
    };

    return this.http.post<any>(this.corsProxy + 'https://api.clickup.com/api/v2/list/900400213038/task', body, {headers: reqHeaders});
  }
}
