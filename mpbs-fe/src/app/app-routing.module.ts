import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  ABOUT_ROUTE,
  DEV_ROUTE,
  FEED_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  SUPPORT_ROUTE,
} from './shared/util/RouteUtils';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HOME_ROUTE.path,
  },
  LOGIN_ROUTE,
  HOME_ROUTE,
  FEED_ROUTE,
  ABOUT_ROUTE,
  SUPPORT_ROUTE,
  DEV_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
