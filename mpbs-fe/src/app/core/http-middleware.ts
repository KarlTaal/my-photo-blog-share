import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertBroker } from '../components/alert/alert-broker';
import { AlertType } from '../components/alert/alert.model';
import * as pb_1 from 'google-protobuf';

@Injectable()
export class HttpMiddleware implements HttpInterceptor {
  constructor(private alertBroker: AlertBroker) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = HttpMiddleware.convertRequestsProtoMessageBodyToJson(req);

    return next.handle(req).pipe(
      catchError((error) => {
          this.alertBroker.add(error.message, AlertType.DANGER);
          return throwError(() => error);
        },
      ),
    );
  }

  private static convertRequestsProtoMessageBodyToJson(req: HttpRequest<any>): HttpRequest<any> {
    if (req?.body) {
      if (req.body instanceof pb_1.Message) {
        return req.clone({body: req.body.toObject()});
      }
    }
    return req;
  }
}
