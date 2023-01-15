import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './views/home-page/home-page.component';
import { PageNotFoundPageComponent } from './views/page-not-found-page/page-not-found-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { SupportPageComponent } from './views/support-page/support-page.component';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { DevPageComponent } from './views/dev-page/dev-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'feed',
    component: FeedPageComponent,
  },
  {
    path: 'support',
    component: SupportPageComponent,
  },
  {
    path: 'dev',
    component: DevPageComponent,
  },
  {
    path: '404',
    component: PageNotFoundPageComponent,
  },
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
