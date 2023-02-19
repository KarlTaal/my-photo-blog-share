import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupportTicket } from 'generated/api/payloads/support-ticket';
import { Observable } from 'rxjs';
import { SupportConfig } from './support.config';

@Injectable({
  providedIn: 'root',
})
export class SupportService {

  constructor(private http: HttpClient, private config: SupportConfig) {
  }

  submitTicket(ticket: SupportTicket): Observable<void> {
    return this.http.post<void>(this.config.submitSupportTicket(), ticket);
  }

}
