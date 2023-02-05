import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'mpbs-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: [ './close-button.component.scss' ],
})
export class CloseButtonComponent {
  getCloseIcon(): IconDefinition {
    return faCircleXmark;
  }
}
