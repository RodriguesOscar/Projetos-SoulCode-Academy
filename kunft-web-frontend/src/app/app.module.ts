import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms'
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormCursoComponent } from './componentes/form-cursos/form-cursos.component';
import { ListaCursoComponent } from './componentes/lista-cursos/lista-cursos.component';
import { AdmCursoComponent } from './componentes/adm-cursos/adm-cursos.component';
import { CardsComponent } from './componentes/cards-cursos/cards.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormUserComponent } from './componentes/form-user/form-user.component';
import { CarouselHomeComponent } from './componentes/carousel-home/carousel-home.component';
import { QuemSomosHomeComponent } from './componentes/quem-somos-home/quem-somos-home.component';
import { TrilhaDevHomeComponent } from './componentes/trilha-dev-home/trilha-dev-home.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormCursoComponent,
    ListaCursoComponent,
    AdmCursoComponent,
    CardsComponent,
    LoginComponent,
    FooterComponent,
    FormUserComponent,
    CarouselHomeComponent,
    QuemSomosHomeComponent,
    TrilhaDevHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,


  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
