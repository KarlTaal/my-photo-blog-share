import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertBroker } from '../components/alert/alert-broker';
import { AlertType } from '../components/alert/alert.model';

@Injectable()
export class HttpMiddleware implements HttpInterceptor {
  constructor(private alertBroker: AlertBroker) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
          this.alertBroker.add(error.message, AlertType.DANGER, true, 3);
          return throwError(error);
        },
      ),
    );
  }


}
