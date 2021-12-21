import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomesiteComponent } from './views/welcomesite/welcomesite.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './shared/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { OfferComponent } from './views/offer/offer.component';
import { SearchComponent } from './views/search/search.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomesiteComponent,
    ButtonComponent,
    OfferComponent,
    SearchComponent,
  ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatButtonModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
