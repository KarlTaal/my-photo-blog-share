import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './views/home-page/home-page.component';
import { PageNotFoundPageComponent } from './views/page-not-found-page/page-not-found-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupportPageComponent } from './views/support-page/support-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { DevPageComponent } from './views/dev-page/dev-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomePageComponent,
    PageNotFoundPageComponent,
    SupportPageComponent,
    AboutPageComponent,
    AlertComponent,
    FeedPageComponent,
    DevPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCircleXmark);
  }
}
