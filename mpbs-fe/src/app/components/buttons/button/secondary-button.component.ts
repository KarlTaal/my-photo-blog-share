import { Component } from '@angular/core';
import { AbstractButtonComponent } from './abstract-button.component';

@Component({
  selector: 'mpbs-secondary-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
})
export class SecondaryButtonComponent extends AbstractButtonComponent {
  constructor() {
    super();
    this.type = 'secondary';
  }
}
