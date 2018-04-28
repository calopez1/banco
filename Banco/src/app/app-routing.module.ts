import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PrincipalComponent } from "./principal/principal.component";
import { ConsignarComponent } from "./consignar/consignar.component";
import { RetirarComponent } from "./retirar/retirar.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent},
  { path: 'consignar', component: ConsignarComponent },
  { path: 'retirar', component: RetirarComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
