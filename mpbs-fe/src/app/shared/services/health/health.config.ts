import { ApiConfig } from '../api-config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HealthConfig extends ApiConfig {
  healthCheck = (): string => this.baseApiUrl + '/healthcheck';
}