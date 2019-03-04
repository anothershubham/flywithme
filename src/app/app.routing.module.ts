import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { FlightsComponent } from "./flights/flights.component";
import { OffersComponent } from "./offers/offers.component";
import { MybookingComponent } from "./mybooking/mybooking.component";
import { MywalletComponent } from "./mywallet/mywallet.component";
import { ProfileComponent } from "./profile/profile.component";
const approutes: Routes =[
{path:'', redirectTo:'flights', pathMatch: 'prefix'},
{ path: 'users', component: UsersComponent},
{ path: 'flights', component: FlightsComponent},
{ path: 'offers', component: OffersComponent},
{ path: 'mybookings', component: MybookingComponent},
{ path: 'mywallet', component: MywalletComponent},
{ path: 'profile', component: ProfileComponent},

// { path: 'login', component: LoginComponent },
// {
//     path: '**', component: PageNotFoundComponent
// }
];

@NgModule({
    imports: [RouterModule.forRoot(approutes,{useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}