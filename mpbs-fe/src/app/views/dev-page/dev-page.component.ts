import { Component } from '@angular/core';
import { AlertBroker } from '../../components/alert/alert-broker';
import { AlertType } from '../../components/alert/alert.model';

@Component({
  selector: 'mpbs-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: [ './dev-page.component.scss' ],
})
export class DevPageComponent {

  constructor(private alertBroker: AlertBroker) {
  }

  addAlert() {
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.SUCCESS, true, 5);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.DANGER, true);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.PRIMARY, false, 15);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.SECONDARY, true, 30);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.SUCCESS, false, 30);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.DANGER, false, 30);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.WARNING, true, 30);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.INFO, true, 30);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.LIGHT, false, 30);
    this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.DARK, true, 30);
  }
}
