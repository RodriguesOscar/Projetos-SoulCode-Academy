import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AutorizadoGuard } from './guards/autorizado.guard'

import { HomeComponent } from './componentes/home/home.component';
import { FormUserComponent } from './componentes/form-user/form-user.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdmCursoComponent } from './componentes/adm-cursos/adm-cursos.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'form-user', component:FormUserComponent},
  {path: 'login', component:LoginComponent},
  {path: 'adm-curso', component:AdmCursoComponent, canActivate:[AutorizadoGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
