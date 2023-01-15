import { Injectable } from '@angular/core';
import { Alert, AlertType } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertBroker {

  private alerts: Alert[] = [];

  getAllAlerts(): Alert[] {
    return this.alerts;
  }

  add(content: string, type: AlertType, dismissible: boolean, dismissAfterSeconds?: number): void {
    this.addAlert({
      type: type,
      icon: true,
      dismissible: dismissible,
      content: content,
      dismissAfterSeconds: dismissAfterSeconds,
    });
  }

  dismiss(alert: Alert): void {
    const alertIndex = this.alerts.indexOf(alert);
    if (alertIndex > -1) {
      this.alerts.splice(alertIndex, 1);
    }
  }

  dismissAll(): void {
    this.alerts.length = 0;
  }

  private addAlert(alert: Alert): void {
    this.alerts.push(alert);
    if (alert.dismissAfterSeconds) {
      setTimeout(() => this.dismiss(alert), alert.dismissAfterSeconds * 1000);
    }
  }
}
