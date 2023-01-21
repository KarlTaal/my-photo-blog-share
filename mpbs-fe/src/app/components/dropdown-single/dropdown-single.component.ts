import { Component, Input } from '@angular/core';
import { DropdownOption } from '../../shared/models/dropdown.model';
import { FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mpbs-dropdown-single',
  templateUrl: './dropdown-single.component.html',
  styleUrls: [ './dropdown-single.component.scss' ],
})
export class DropdownSingleComponent {
  @Input() options: DropdownOption[] = [];
  @Input() formGroup!: FormGroup;
  @Input() formKey!: string;
  @Input() size: 'small' | 'normal' | 'large' | 'max' = 'normal';

  getSelectedLabel(): string | null {
    return this.options.find(option => option.value === this.formGroup?.get(this.formKey)?.value)?.label ?? null;
  }

  selectItem(value: string) {
    const patch: { [key: string]: string; } = {};
    patch[this.formKey] = value;
    this.formGroup?.patchValue(patch);
  }

  getSizeClass(): string {
    switch (this.size){
      case 'small':
        return 'container-small';
      case 'normal':
        return 'container-normal';
      case 'large':
        return 'container-large';
      case 'max':
        return 'container-max';
      default:
        return 'normal'
    }
  }

  getArrowDownIcon(): IconDefinition {
    return faChevronDown;
  }
}
