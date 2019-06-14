import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchPageComponent} from './match-page/match-page.component';
import {LoginPageComponent} from "./login-page/login-page.component";


const routes: Routes = [
  {path: '', component: MatchPageComponent},
  {path: 'login', component: LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
