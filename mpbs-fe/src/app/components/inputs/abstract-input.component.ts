import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({template: ''})
export class AbstractInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() formKey!: string;
}