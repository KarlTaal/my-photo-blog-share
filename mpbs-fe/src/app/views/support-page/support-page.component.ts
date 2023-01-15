import { Component, OnInit } from '@angular/core';
import { ClickUpService } from '../../services/click-up.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mpbs-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: [ './support-page.component.scss' ],
})
export class SupportPageComponent implements OnInit {
  authorizationAcceptCode: any;
  authorizationToken: any;
  postResponse: any;


  constructor(private clickUpService: ClickUpService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initRouterParamSubscription();
  }

  retrieveAuth() {
    this.clickUpService.getUserAccessToken(this.authorizationAcceptCode).subscribe((response) => this.authorizationToken = response);
  }

  postNewTask() {
    this.clickUpService.postNewTask(this.authorizationToken).subscribe((response) => this.postResponse = response);
  }


  private initRouterParamSubscription() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const authAcceptCode = params.get('code');
      if (authAcceptCode) {
        this.authorizationAcceptCode = authAcceptCode;
      }
    });
  }
}
