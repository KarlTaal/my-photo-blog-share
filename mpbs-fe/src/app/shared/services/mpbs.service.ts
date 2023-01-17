import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MpbsService {

  constructor(private http: HttpClient) {
  }

  healthCheck(): Observable<string> {
    return this.http.get<string>('http://localhost:1323/healthcheck');
  }

  timeout(): Observable<string> {
    return this.http.get<string>('http://localhost:1323/timeout');
  }

  internalError(): Observable<string> {
    return this.http.get<string>('http://localhost:1323/error');
  }

  authRequired(): Observable<string> {
    return this.http.get<string>('http://localhost:1323/auth');
  }

}
