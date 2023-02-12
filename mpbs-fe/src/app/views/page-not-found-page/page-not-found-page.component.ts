import { Component, OnInit } from '@angular/core';
import { AlertBroker } from '../../components/alert/alert-broker';
import { AlertType } from '../../components/alert/alert.model';

@Component({
  selector: 'mpbs-page-not-found-page',
  templateUrl: './page-not-found-page.component.html',
  styleUrls: [ './page-not-found-page.component.scss' ],
})
export class PageNotFoundPageComponent implements OnInit {

  constructor(private alertBroker: AlertBroker) {
  }

  ngOnInit(): void {
    this.alertBroker.add("Woah there lost traveller... We didn't find the page you were looking for.", AlertType.WARNING);
  }

}
