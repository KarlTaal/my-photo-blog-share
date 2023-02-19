import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthConfig } from './health.config';

@Injectable({
  providedIn: 'root',
})
export class HealthService {

  constructor(private http: HttpClient, private config: HealthConfig) {
  }

  healthCheck(): Observable<string> {
    return this.http.get<string>(this.config.healthCheck());
  }
}
