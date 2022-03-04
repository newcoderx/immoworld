import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomesiteComponent } from "./views/welcomesite/welcomesite.component";
import { OfferComponent } from "./views/offer/offer.component";
import { SearchComponent } from "./views/search/search.component";
import { LoginComponent } from "./views/login/login.component";
import { RealestatesComponent } from './views/realestates/realestates.component';

const routes: Routes = [
    {
        path: '',
        component: RealestatesComponent,
        pathMatch: 'full'
    },
    {
        path: 'offer',
        component: OfferComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {
}
