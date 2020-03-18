import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightCommentsComponent } from './components/flight-comments/flight-comments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'flight-comments/:flightId', component: FlightCommentsComponent},
  {path:'flight-comments', component: FlightCommentsComponent},
  {path:'', redirectTo: '/flight-comments/',pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
