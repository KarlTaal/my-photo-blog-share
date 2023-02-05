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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { DevPageComponent } from './views/dev-page/dev-page.component';
import { HttpMiddleware } from './core/http-middleware';
import {
  SupportTicketSubmissionComponent,
} from './components/support-ticket-submission/support-ticket-submission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModuleModule } from './components/buttons/buttons-module.module';
import { InputModuleModule } from './components/inputs/input-module.module';

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
    SupportTicketSubmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputModuleModule,
    ButtonsModuleModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpMiddleware, multi: true},
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {

}
