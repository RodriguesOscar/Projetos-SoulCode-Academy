import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/models/projeto.model';
import { ProjetoService } from 'src/app/services/projeto.service';


@Component({
  selector: 'app-lista-projeto',
  templateUrl: './lista-projeto.component.html',
  styleUrls: ['./lista-projeto.component.css']
})
export class ListaProjetoComponent implements OnInit {

  projetos: any = []

  constructor(private projetoService: ProjetoService, private router: Router) { }

  ngOnInit(): void {
    this.buscarTodosProjetos()
  }

  buscarTodosProjetos(){
    this.projetoService.buscarTodosProjetos().subscribe(resultado =>{

      console.log(resultado)

      resultado.forEach((projeto: any[]) => {

        let projetoComEquipe: any ={
          id_projeto:'',
          pro_nome:'',
          pro_descricao: '',
          id_equipe:'',
          eqp_nome:'',
          eqp_atribuicao:''
        }

        projetoComEquipe.id_projeto = projeto[0]
        projetoComEquipe.pro_nome = projeto[1]
        projetoComEquipe.pro_descricao = projeto[2]
        if(projeto[3] != null){
          projetoComEquipe.id_equipe = projeto[3]
          projetoComEquipe.eqp_nome = projeto[4]
          projetoComEquipe.eqp_atribuicao = projeto[5]
        }else{
          projetoComEquipe.id_equipe = 0
          projetoComEquipe.eqp_nome = "----"
          projetoComEquipe.eqp_atribuicao = "----"
        }


        this.projetos.push(projetoComEquipe)

      });


    })
  }

}
