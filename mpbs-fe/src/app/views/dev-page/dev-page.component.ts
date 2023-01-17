import { Component } from '@angular/core';
import { AlertBroker } from '../../components/alert/alert-broker';
import { MpbsService } from '../../shared/services/mpbs.service';

@Component({
  selector: 'mpbs-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: [ './dev-page.component.scss' ],
})
export class DevPageComponent {

  constructor(private alertBroker: AlertBroker, private mpbsService: MpbsService) {
  }

  addAlert() {
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.SUCCESS, true, 5);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.DANGER, true);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.PRIMARY, false, 15);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.SECONDARY, true, 30);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.SUCCESS, false, 30);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.DANGER, false, 30);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.WARNING, true, 30);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.INFO, true, 30);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.LIGHT, false, 30);
    //this.alertBroker.add('testing <b>allows bold</b> alert better than pria', AlertType.DARK, true, 30);
  }

  sendDummyRequests() {
    this.mpbsService.healthCheck().subscribe({
      next: () => console.log(`1_success`),
      error: () => console.log(`1_error`),
    });

    this.mpbsService.timeout().subscribe({
      next: () => console.log(`2_success`),
      error: () => console.log(`2_error`),
    });

    this.mpbsService.internalError().subscribe({
      next: () => console.log(`3_success`),
      error: () => console.log(`3_error`),
    });

    this.mpbsService.authRequired().subscribe({
      next: () => console.log(`4_success`),
      error: () => console.log(`4_error`),
    });
  }
}
