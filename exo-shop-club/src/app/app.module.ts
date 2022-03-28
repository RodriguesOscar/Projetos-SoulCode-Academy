import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { LOCALE_ID } from '@angular/core'
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localePt)


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { CardsComponent } from './components/cards/cards.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CardsComponent,
    PipesComponent,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR '}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
