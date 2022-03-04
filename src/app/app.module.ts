import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomesiteComponent } from './views/welcomesite/welcomesite.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './shared/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { OfferComponent } from './views/offer/offer.component';
import { SearchComponent } from './views/search/search.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './views/login/login.component';
import { DateValueAccessorModule } from "angular-date-value-accessor";
import { ReactiveFormsModule } from "@angular/forms";
import { RealestatesComponent } from './views/realestates/realestates.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomesiteComponent,
    ButtonComponent,
    OfferComponent,
    SearchComponent,
    LoginComponent,
    RealestatesComponent,
  ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatButtonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        DateValueAccessorModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
