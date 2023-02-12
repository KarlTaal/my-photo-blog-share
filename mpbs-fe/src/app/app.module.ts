import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { SpaceManComponent } from './components/not-found/space-man/space-man.component';
import { LighthouseComponent } from './components/not-found/lighthouse/lighthouse.component';
import { SubmarineComponent } from './components/not-found/submarine/submarine.component';
import { PlanetsComponent } from './components/not-found/planets/planets.component';
import { FishComponent } from './components/not-found/fish/fish.component';
import { SquidComponent } from './components/not-found/ocean-bubbles/squid.component';
import { LoginPageComponent } from './views/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    PageNotFoundPageComponent,
    SupportPageComponent,
    AboutPageComponent,
    AlertComponent,
    FeedPageComponent,
    DevPageComponent,
    SupportTicketSubmissionComponent,
    SpaceManComponent,
    LighthouseComponent,
    SubmarineComponent,
    PlanetsComponent,
    FishComponent,
    SquidComponent,
    LoginPageComponent,
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
