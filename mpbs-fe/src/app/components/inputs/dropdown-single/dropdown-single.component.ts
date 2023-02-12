import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DropdownOption } from './dropdown.model';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
  selector: 'mpbs-dropdown-single',
  templateUrl: './dropdown-single.component.html',
  styleUrls: [ './dropdown-single.component.scss' ],
})
export class DropdownSingleComponent extends AbstractInputComponent {
  @Input() options: DropdownOption[] = [];
  @Input() size: 'small' | 'normal' | 'large' = 'normal';

  getSizeClass(): string {
    switch (this.size){
      case 'small':
        return 'container-small';
      case 'normal':
        return 'container-normal';
      case 'large':
        return 'container-large';
      default:
        return 'normal'
    }
  }

  getArrowDownIcon(): IconDefinition {
    return faChevronDown;
  }
}
