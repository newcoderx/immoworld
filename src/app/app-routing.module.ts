import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomesiteComponent } from "./views/welcomesite/welcomesite.component";
import { OfferComponent } from "./views/offer/offer.component";
import { SearchComponent } from "./views/search/search.component";

const routes: Routes = [
    {
        path: '',
        component: WelcomesiteComponent,
        pathMatch: 'full'
    },
    {
        path: 'offer',
        component: OfferComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {
}
