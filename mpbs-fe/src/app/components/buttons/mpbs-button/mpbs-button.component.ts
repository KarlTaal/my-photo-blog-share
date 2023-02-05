import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mpbs-button',
  templateUrl: './mpbs-button.component.html',
  styleUrls: ['./mpbs-button.component.scss']
})
export class MpbsButtonComponent {
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

}
