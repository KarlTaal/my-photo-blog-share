import { Route } from '@angular/router';
import { LoginPageComponent } from '../../views/login-page/login-page.component';
import { HomePageComponent } from '../../views/home-page/home-page.component';
import { AboutPageComponent } from '../../views/about-page/about-page.component';
import { FeedPageComponent } from '../../views/feed-page/feed-page.component';
import { SupportPageComponent } from '../../views/support-page/support-page.component';
import { DevPageComponent } from '../../views/dev-page/dev-page.component';
import { PageNotFoundPageComponent } from '../../views/page-not-found-page/page-not-found-page.component';

export class RouteUtils {
  static getHeaderRoutes(): Route[] {
    return [
      LOGIN_ROUTE,
      HOME_ROUTE,
      FEED_ROUTE,
      DEV_ROUTE,
    ];
  }
}

export const LOGIN_ROUTE: Route = {path: 'login', title: 'Login', component: LoginPageComponent};
export const HOME_ROUTE: Route = {path: 'home', title: 'Home', component: HomePageComponent};
export const FEED_ROUTE: Route = {path: 'feed', title: 'Feed', component: FeedPageComponent};
export const ABOUT_ROUTE: Route = {path: 'about', title: 'About', component: AboutPageComponent};
export const SUPPORT_ROUTE: Route = {path: 'support', title: 'Support', component: SupportPageComponent};
export const DEV_ROUTE: Route = {path: 'dev', title: 'Dev', component: DevPageComponent};
export const PAGE_NOT_FOUND_ROUTE: Route = {path: '404', title: 'Page not found', component: PageNotFoundPageComponent};
