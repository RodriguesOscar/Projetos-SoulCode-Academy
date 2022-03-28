import { SanitizeHtmlDirective } from './Directive/sanitize-html.directive';
import { SafeHtmlPipe } from './pipes/safe-url.pipe';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt'
import { CurrencyPipe, registerLocaleData} from '@angular/common'



//templates
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './templates/home/home.component';

//funcionário
import { ListaFuncionarioComponent } from './views/funcionario/lista-funcionario/lista-funcionario.component';
import { CadastroFuncionarioComponent } from './views/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ExclusaoFuncionarioComponent } from './views/funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { EdicaoFuncionarioComponent } from './views/funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaGeralFuncionarioComponent } from './views/funcionario/lista-geral-funcionario/lista-geral-funcionario.component';
import { ListaFuncionarioEquipeComponent } from './views/funcionario/lista-funcionario-equipe/lista-funcionario-equipe.component';
import { AtribuirEquipeComponent } from './views/funcionario/atribuir-equipe/atribuir-equipe.component';

//equipe
import { CadastroEquipeComponent } from './views/equipe/cadastro-equipe/cadastro-equipe.component';
import { EdicaoEquipeComponent } from './views/equipe/edicao-equipe/edicao-equipe.component';
import { ExclusaoEquipeComponent } from './views/equipe/exclusao-equipe/exclusao-equipe.component';
import { ListaEquipeComponent } from './views/equipe/lista-equipe/lista-equipe.component';

//projeto
import { ProjetoEquipeComponent } from './views/projeto/projeto-equipe/projeto-equipe.component';
import { ListaProjetoComponent } from './views/projeto/lista-projeto/lista-projeto.component';
import { CadastrarProjetoComponent } from './views/projeto/cadastrar-projeto/cadastrar-projeto.component';
import { AtribuirEquipeProjetoComponent } from './views/projeto/atribuir-equipe-projeto/atribuir-equipe-projeto.component';

import { SafePipe } from './pipes/safe-pipe.pipe';
import { ListaCardsFuncionarioComponent } from './views/funcionario/lista-cards-funcionario/lista-cards-funcionario.component';
import { ListaSalarioFuncionarioComponent } from './views/salario/lista-salario-funcionario/lista-salario-funcionario.component';
import { CadastroSalarioComponent } from './views/salario/cadastro-salario/cadastro-salario.component';

import { NgxCurrencyModule } from "ngx-currency";
import { EdicaoSalarioComponent } from './views/salario/edicao-salario/edicao-salario.component';
import { ExclusaoSalarioComponent } from './views/salario/exclusao-salario/exclusao-salario.component';
import { EdicaoProjetoComponent } from './views/projeto/edicao-projeto/edicao-projeto.component';
import { ExclusaoProjetoComponent } from './views/projeto/exclusao-projeto/exclusao-projeto.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component'

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroFuncionarioComponent,
    ExclusaoFuncionarioComponent,
    EdicaoFuncionarioComponent,
    ListaFuncionarioComponent,
    ListaGeralFuncionarioComponent,
    CadastroEquipeComponent,
    EdicaoEquipeComponent,
    ExclusaoEquipeComponent,
    ListaEquipeComponent,
    ProjetoEquipeComponent,
    ListaProjetoComponent,
    ListaFuncionarioEquipeComponent,
    AtribuirEquipeComponent,
    CadastrarProjetoComponent,
    SafePipe,
    AtribuirEquipeProjetoComponent,
    ListaCardsFuncionarioComponent,
    ListaSalarioFuncionarioComponent,
    CadastroSalarioComponent,
    EdicaoSalarioComponent,
    ExclusaoSalarioComponent,
    EdicaoProjetoComponent,
    ExclusaoProjetoComponent,
    SanitizeHtmlDirective,
    SafeHtmlPipe,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: "pt-BR"}, {provide: DEFAULT_CURRENCY_CODE, useValue: "BRL"}, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
