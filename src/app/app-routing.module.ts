import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomesiteComponent } from "./views/welcomesite/welcomesite.component";
import { OfferComponent } from "./views/offer/offer.component";
import { SearchComponent } from "./views/search/search.component";

const routes: Routes = [
    {
        path: '/offer',
        component: OfferComponent
    },
    {
        path: '/search',
        component: SearchComponent
    }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {
}
