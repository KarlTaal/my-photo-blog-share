import { Component } from '@angular/core';
import { AbstractButtonComponent } from './abstract-button.component';

@Component({
  selector: 'mpbs-primary-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
})
export class PrimaryButtonComponent extends AbstractButtonComponent {
  constructor() {
    super();
    this.type = 'primary';
  }
}
