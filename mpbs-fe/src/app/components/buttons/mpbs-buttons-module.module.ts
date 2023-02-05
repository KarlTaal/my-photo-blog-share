import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpbsButtonComponent } from './mpbs-button/mpbs-button.component';
import { MpbsCloseButtonComponent } from './mpbs-close-button/mpbs-close-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MpbsBadgeButtonComponent } from './mpbs-badge-button/mpbs-badge-button.component';


@NgModule({
  declarations: [
    MpbsButtonComponent,
    MpbsCloseButtonComponent,
    MpbsBadgeButtonComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    MpbsCloseButtonComponent,
    MpbsBadgeButtonComponent,
    MpbsButtonComponent
  ],
})
export class MpbsButtonsModuleModule { }
