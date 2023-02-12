import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HOME_ROUTE, PAGE_NOT_FOUND_ROUTE, RouteUtils } from './shared/util/RouteUtils';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HOME_ROUTE.path,
  },
  ...RouteUtils.getHeaderRoutes(),
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
