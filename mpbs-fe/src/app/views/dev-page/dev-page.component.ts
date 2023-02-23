import { Component, OnInit } from '@angular/core';
import { AlertBroker } from '../../components/alert/alert-broker';
import { AlertType } from '../../components/alert/alert.model';
import { HealthService } from '../../shared/services/health/health.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'mpbs-dev-page',
  templateUrl: './dev-page.component.html',
})
export class DevPageComponent implements OnInit {

  constructor(private alertBroker: AlertBroker, private healthService: HealthService) {
  }

  ngOnInit(): void {
  }

  addAlert() {
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.SUCCESS);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.DANGER);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.PRIMARY);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.SECONDARY);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.SUCCESS);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.DANGER);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.WARNING);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.INFO);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.LIGHT);
    this.alertBroker.add('testing <b>bold</b> <i>italic</i> <u>underline</u>', AlertType.DARK);
  }

  healthCheck() {
    this.healthService.healthCheck().subscribe({
      next: (response) => this.alertBroker.add(response, AlertType.SUCCESS),
    });
  }

  getEnvironmentTitle() {
    return environment.title;
  }
}
