import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomePageComponent } from './views/home-page/home-page.component';
import { PageNotFoundPageComponent } from './views/page-not-found-page/page-not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomePageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
