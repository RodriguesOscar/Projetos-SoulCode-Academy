import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/models/equipe.model';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-equipe',
  templateUrl: './lista-equipe.component.html',
  styleUrls: ['./lista-equipe.component.css']
})
export class ListaEquipeComponent implements OnInit {

  equipes: any = [];

  constructor(private equipeService:EquipeService, private projetoService:ProjetoService,
    private router: Router) { }

  ngOnInit(): void {
    this.mostrarTodasEquipes()
  }

  mostrarTodasEquipes(){
    this.equipeService.buscarTodasEquipes().subscribe(resultado =>{
      console.log(this.equipes)

      resultado.forEach((equipe: any[]) => {

        let equipeComProjeto: any ={
          id_equipe:'',
          eqp_nome:'',
          eqp_atribuicao: '',
          id_projeto:'',
          pro_nome:'',
          pro_descricao:''
        }

        equipeComProjeto.id_equipe = equipe[0]
        equipeComProjeto.eqp_nome = equipe[1]
        equipeComProjeto.eqp_atribuicao = equipe[2]
        if(equipe[3] != null){
          equipeComProjeto.id_projeto = equipe[3]
          equipeComProjeto.pro_nome = equipe[4]
          equipeComProjeto.pro_descricao = equipe[5]
        }else{
          equipeComProjeto.id_projeto = 0
          equipeComProjeto.pro_nome = "----"
          equipeComProjeto.pro_descricao = "----"
        }


        this.equipes.push(equipeComProjeto)

      });


    })


  }

  navegarCadastroEquipe(){
    this.router.navigate(['/cadastro-equipe'])
  }

  deletarEquipe(id:any){

  }

}
