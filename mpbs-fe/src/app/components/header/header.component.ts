import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { RouteUtils } from '../../shared/util/RouteUtils';

@Component({
  selector: 'mpbs-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  getHeaderRoutes(): Route[] {
    return RouteUtils.getHeaderRoutes();
  }

  isRouteActive(route: Route): boolean {
    return this.currentRoute.includes(route.path ?? '');
  }
}
