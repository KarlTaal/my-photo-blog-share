import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mpbs-badge-button',
  templateUrl: './mpbs-badge-button.component.html',
  styleUrls: ['./mpbs-badge-button.component.scss']
})
export class MpbsBadgeButtonComponent {
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
