import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportTicket, SupportTicketType } from '../../shared/models/support-ticket.model';
import { DropdownOption } from '../../shared/models/dropdown.model';
import { StringUtils } from '../../shared/util/StringUtils';
import { AlertBroker } from '../alert/alert-broker';
import { AlertType } from '../alert/alert.model';

@Component({
  selector: 'mpbs-support-ticket-submission',
  templateUrl: './support-ticket-submission.component.html',
  styleUrls: [ './support-ticket-submission.component.scss' ],
})
export class SupportTicketSubmissionComponent implements OnInit {

  readonly MIN_BODY_CHAR_LENGTH = 15;
  readonly DEFAULT_TICKET_TYPE = SupportTicketType.GENERAL;

  ticketForm!: FormGroup;

  constructor(private fb: FormBuilder, private alertBroker: AlertBroker) {
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  getSupportTicketFromForm(): SupportTicket {
    return {
      type: this.ticketForm.get('type')?.value,
      body: this.ticketForm.get('body')?.value,
    };
  }

  getOptions(): DropdownOption[] {
    return Object.values(SupportTicketType).map((enumVal) => {
      return {
        value: enumVal,
        label: StringUtils.toTitleCase(enumVal),
      };
    });
  }

  clear() {
    this.ticketForm.reset({type: this.DEFAULT_TICKET_TYPE});
  }

  submit() {
    if (this.ticketForm.valid) {
      this.alertBroker.add(
        `Valid form<br/>${ this.ticketForm?.get('type')?.value }<br/>${ this.ticketForm?.get('body')?.value }`,
        AlertType.SUCCESS,
      );
    } else {
      if (this.ticketForm?.invalid) {
        this.alertBroker.add(`Teksti miinimum pikkus on ${ this.MIN_BODY_CHAR_LENGTH } tähemärki`, AlertType.DANGER);
      }
    }
  }

  private createFormGroup() {
    this.ticketForm = this.fb.group({
      type: [ this.DEFAULT_TICKET_TYPE, Validators.required ],
      body: [ null, [ Validators.required, Validators.minLength(this.MIN_BODY_CHAR_LENGTH) ] ],
      attachments: [ null ],
    });
  }
}
