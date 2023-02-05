import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportTicket, SupportTicketType } from 'generated/api/payloads/support-ticket';
import { StringUtils } from '../../shared/util/StringUtils';
import { AlertBroker } from '../alert/alert-broker';
import { AlertType } from '../alert/alert.model';
import { DropdownOption } from '../inputs/dropdown-single/dropdown.model';


@Component({
  selector: 'mpbs-support-ticket-submission',
  templateUrl: './support-ticket-submission.component.html',
  styleUrls: [ './support-ticket-submission.component.scss' ],
})
export class SupportTicketSubmissionComponent implements OnInit {
  @Output() submitTicket: EventEmitter<SupportTicket> = new EventEmitter<SupportTicket>();

  readonly MIN_BODY_CHAR_LENGTH = 15;
  readonly DEFAULT_TICKET_TYPE = SupportTicketType[SupportTicketType.GENERAL];

  ticketForm!: FormGroup;

  constructor(private fb: FormBuilder, private alertBroker: AlertBroker) {
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  getOptions(): DropdownOption[] {
    return StringUtils.enumToKeysArray(SupportTicketType).map((enumVal) => {
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
      this.emitTicket();
    } else {
      if (this.ticketForm?.invalid) {
        this.alertBroker.add(`Teksti miinimum pikkus on ${ this.MIN_BODY_CHAR_LENGTH } tähemärki`, AlertType.DANGER);
      }
    }
  }

  private emitTicket() {
    this.submitTicket.emit(new SupportTicket({
      type: this.ticketForm.get('type')?.value,
      body: this.ticketForm.get('body')?.value,
    }));
  }

  private createFormGroup() {
    this.ticketForm = this.fb.group({
      type: [ this.DEFAULT_TICKET_TYPE, Validators.required ],
      body: [ 'asdfn asdfsadfasdf ad sdf asdf sda fsa', [ Validators.required, Validators.minLength(this.MIN_BODY_CHAR_LENGTH) ] ],
    });
  }
}