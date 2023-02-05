import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupportTicket } from 'generated/api/payloads/support-ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupportService {

  constructor(private http: HttpClient) {
  }

  submitTicket(ticket: SupportTicket): Observable<void> {
    return this.http.post<void>('http://localhost:1323/support/ticket', ticket);
  }

}
