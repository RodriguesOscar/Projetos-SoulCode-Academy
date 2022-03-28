import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-lista-geral-funcionario',
  templateUrl: './lista-geral-funcionario.component.html',
  styleUrls: ['./lista-geral-funcionario.component.css']
})
export class ListaGeralFuncionarioComponent implements OnInit {

  funcionarios:any = []

  constructor(private funcionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarTodosFuncionarios()
  }

  buscarTodosFuncionarios(){
    this.funcionarioService.buscarTodosFuncionarios().subscribe(resultado =>{

      console.log(resultado)

      resultado.forEach((funcionario: any[]) => {

        let funcionariosComEquipe: any ={
          id_funcionario:'',
          func_cargo: '',
          func_nome:'',
          id_equipe:'',
          eqp_nome:'',
          eqp_atribuicao:''
        }

        funcionariosComEquipe.id_funcionario = funcionario[0]
        funcionariosComEquipe.func_nome = funcionario[1]
        funcionariosComEquipe.func_cargo = funcionario[2]
        if(funcionario[3] != null){
          funcionariosComEquipe.id_equipe = funcionario[3]
          funcionariosComEquipe.eqp_nome = funcionario[4]
          funcionariosComEquipe.eqp_atribuicao = funcionario[5]
        }else{
          funcionariosComEquipe.id_equipe = 0
          funcionariosComEquipe.eqp_nome = "----"
          funcionariosComEquipe.eqp_atribuicao = "----"
        }


        this.funcionarios.push(funcionariosComEquipe)

      });


    })

  }

}
