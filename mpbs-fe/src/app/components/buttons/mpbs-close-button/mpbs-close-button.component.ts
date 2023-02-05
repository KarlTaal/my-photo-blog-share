import { Component, EventEmitter, Output } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'mpbs-close-button',
  templateUrl: './mpbs-close-button.component.html',
  styleUrls: [ './mpbs-close-button.component.scss' ],
})
export class MpbsCloseButtonComponent {
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  getCloseIcon(): IconDefinition {
    return faCircleXmark;
  }
}
