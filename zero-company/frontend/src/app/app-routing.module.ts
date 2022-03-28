import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//templates
import { HomeComponent } from './templates/home/home.component';

//funcionario
import { ListaFuncionarioComponent } from './views/funcionario/lista-funcionario/lista-funcionario.component';
import { CadastroFuncionarioComponent } from './views/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ExclusaoFuncionarioComponent } from './views/funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { EdicaoFuncionarioComponent } from './views/funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaGeralFuncionarioComponent } from './views/funcionario/lista-geral-funcionario/lista-geral-funcionario.component';
import { ListaFuncionarioEquipeComponent } from './views/funcionario/lista-funcionario-equipe/lista-funcionario-equipe.component';
import { AtribuirEquipeComponent } from './views/funcionario/atribuir-equipe/atribuir-equipe.component';
import { ListaCardsFuncionarioComponent } from './views/funcionario/lista-cards-funcionario/lista-cards-funcionario.component';

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
import { ListaSalarioFuncionarioComponent } from './views/salario/lista-salario-funcionario/lista-salario-funcionario.component';
import { CadastroSalarioComponent } from './views/salario/cadastro-salario/cadastro-salario.component';
import { EdicaoSalarioComponent } from './views/salario/edicao-salario/edicao-salario.component';
import { ExclusaoSalarioComponent } from './views/salario/exclusao-salario/exclusao-salario.component';
import { EdicaoProjetoComponent } from './views/projeto/edicao-projeto/edicao-projeto.component';
import { ExclusaoProjetoComponent } from './views/projeto/exclusao-projeto/exclusao-projeto.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},

  //equipe
  {path: 'equipes', component:ListaEquipeComponent},
  {path: 'cadastro-equipe', component: CadastroEquipeComponent},
  {path: 'exclusao-equipe/:id', component: ExclusaoEquipeComponent},
  {path: 'edicao-equipe/:id', component: EdicaoEquipeComponent},

  //funcionario
  {path: 'funcionario-equipe/:id_equipe', component: ListaFuncionarioComponent},
  {path: 'cadastro-funcionario/:id_equipe', component: CadastroFuncionarioComponent},
  {path: 'exclusao-funcionario/:id_funcionario', component: ExclusaoFuncionarioComponent},
  {path: 'edicao-funcionario/:id_funcionario', component: EdicaoFuncionarioComponent},
  {path: 'lista-geral-funcionario', component: ListaGeralFuncionarioComponent},
  {path:"funcionario/listaCards", component:ListaCardsFuncionarioComponent},
  {path:"funcionario/lista", component:ListaFuncionarioComponent},
  {path:"funcionario/listaDaEquipe/:id_equipe", component:ListaFuncionarioEquipeComponent},
  {path:"funcionario/cadastrar", component:CadastroFuncionarioComponent},
  {path:"funcionario/atribuir-equipe/:id_funcionario/:id_equipe", component:AtribuirEquipeComponent},

  //projeto
  {path: 'projeto-equipe/:id_equipe', component: ProjetoEquipeComponent},
  {path: 'projeto/lista-projeto', component: ListaProjetoComponent},
  {path:"projeto/cadastro", component:CadastrarProjetoComponent},
  {path:"projeto/atribuirEquipe/:id_projeto", component:AtribuirEquipeProjetoComponent},
  {path: 'exclusao-projeto/:id_projeto', component: ExclusaoProjetoComponent},
  {path: 'edicao-projeto/:id_projeto', component: EdicaoProjetoComponent},

  //salario
  {path: 'salario/lista-funcionario/:id_funcionario', component: ListaSalarioFuncionarioComponent},
  {path: 'salario/cadastro/:id_funcionario', component: CadastroSalarioComponent},
  {path: 'salario/edicao/:codigo/:id_funcionario', component: EdicaoSalarioComponent},
  {path:"salario/exclusao/:codigo/:id_funcionario", component:ExclusaoSalarioComponent},

  //rotas especiais
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
