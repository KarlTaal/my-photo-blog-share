import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input/file-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownSingleComponent } from './dropdown-single/dropdown-single.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AbstractInputComponent } from './abstract-input.component';

@NgModule({
  declarations: [ AbstractInputComponent, DropdownSingleComponent, FileInputComponent, TextareaComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [ DropdownSingleComponent, FileInputComponent, TextareaComponent ],
})
export class InputModuleModule {
}
