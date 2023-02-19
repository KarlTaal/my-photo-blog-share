import { Component } from '@angular/core';
import { SupportTicket } from 'generated/api/payloads/support-ticket';
import { AlertBroker } from '../../components/alert/alert-broker';
import { AlertType } from '../../components/alert/alert.model';
import { SupportService } from '../../shared/services/support/support.service';

@Component({
  selector: 'mpbs-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: [ './support-page.component.scss' ],
})
export class SupportPageComponent {

  constructor(private supportService: SupportService, private alertBroker: AlertBroker) {
  }

  submitTicket(ticket: SupportTicket) {
    this.supportService.submitTicket(ticket).subscribe(() => {
        this.alertBroker.add('Ticket submitted!', AlertType.SUCCESS);
      },
    );
  }
}
