import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimaryButtonComponent } from './button/primary-button.component';
import { SecondaryButtonComponent } from './button/secondary-button.component';
import { CloseButtonComponent } from './close-button/close-button.component';
import { BadgeButtonComponent } from './badge-button/badge-button.component';
import { AbstractButtonComponent } from './button/abstract-button.component';


@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    CloseButtonComponent,
    BadgeButtonComponent,
    AbstractButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CloseButtonComponent,
    BadgeButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
})
export class ButtonsModuleModule { }
