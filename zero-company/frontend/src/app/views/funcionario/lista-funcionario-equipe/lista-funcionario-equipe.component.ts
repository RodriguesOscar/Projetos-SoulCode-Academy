import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionario-equipe',
  templateUrl: './lista-funcionario-equipe.component.html',
  styleUrls: ['./lista-funcionario-equipe.component.css']
})
export class ListaFuncionarioEquipeComponent implements OnInit {

  id_equipe: any

  funcionarios:Funcionario[] =[]

  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_equipe = this.route.snapshot.paramMap.get('id_equipe')
    this.mostrarFuncionariosDaEquipe()
  }

  mostrarFuncionariosDaEquipe(){
    this.funcionarioService.buscarFuncionariosEquipe(this.id_equipe).subscribe(resultado =>{
      this.funcionarios = resultado
      console.log(this.funcionarios)
    })
  }

  voltar(){
    this.router.navigate(['/equipes'])
  }

}
