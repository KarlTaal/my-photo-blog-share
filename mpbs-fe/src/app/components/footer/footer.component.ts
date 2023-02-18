import { Component } from '@angular/core';
import { ABOUT_ROUTE, SUPPORT_ROUTE } from '../../shared/util/RouteUtils';

@Component({
  selector: 'mpbs-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ],
})
export class FooterComponent {

  getAboutUsLink(): string {
    return ABOUT_ROUTE.path ?? '';
  }

  getSupportLink(): string {
    return SUPPORT_ROUTE.path ?? '';
  }
}
