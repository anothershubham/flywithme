import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { FlightsComponent } from "./flights/flights.component";
const approutes: Routes =[
{path:'', redirectTo:'flights', pathMatch: 'prefix'},
{ path: 'users', component: UsersComponent},
{ path: 'flights', component: FlightsComponent},

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