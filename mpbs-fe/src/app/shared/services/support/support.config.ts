import { ApiConfig } from '../api-config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupportConfig extends ApiConfig {
  submitSupportTicket = (): string => this.baseApiUrl + '/support/ticket';
}