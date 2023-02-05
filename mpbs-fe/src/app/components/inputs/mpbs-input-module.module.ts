import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSingleComponent } from './dropdown-single/dropdown-single.component';
import { FileInputComponent } from './file-input/file-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [DropdownSingleComponent, FileInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [DropdownSingleComponent, FileInputComponent]
})
export class MpbsInputModuleModule { }
