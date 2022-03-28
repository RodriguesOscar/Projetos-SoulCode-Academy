import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';
import { Projeto } from 'src/app/models/projeto.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { ProjetoService } from 'src/app/services/projeto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-projeto-equipe',
  templateUrl: './projeto-equipe.component.html',
  styleUrls: ['./projeto-equipe.component.css']
})
export class ProjetoEquipeComponent implements OnInit {

  id_equipe:any

  projetoCadastrado: boolean = false

  projetosSemEquipe:any

  projetoSemEquipeEscolhido: any = []

  projeto:Projeto = {
    id_projeto:'',
    pro_nome:'',
    pro_descricao:''
  }

  equipe: Equipe = {
    id_equipe: '',
    eqp_nome: '',
    eqp_atribuicao: '',

  }

  constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router, private equipeService:EquipeService) { }

  ngOnInit(): void  {
    this.id_equipe = this.route.snapshot.paramMap.get('id_equipe')
    this.buscarEquipe()
    this.buscarProjetoDaEquipe()
    this.buscarProjetosSemEquipe()
  }

  buscarEquipe(){
    this.equipeService.mostrarUmaEquipe(this.id_equipe).subscribe(resultado =>{
      this.equipe = resultado
    })
  }
  buscarProjetoDaEquipe(){
    this.projetoService.buscarProjetoDaEquipe (this.id_equipe).subscribe((resultado)=>{

      if(resultado == undefined){
        Swal.fire(
          'Hey',
          'Para essa equipe não está definida uma tarefa. Que tal mudar isso?',
          'info'
          )
        this.projetoCadastrado = false
        console.log(resultado);
      }else{
        this.projeto = resultado
        this.projetoCadastrado = true
        console.log(resultado);
      }


    })
  }

  buscarProjetosSemEquipe(){

    this.projetoService.buscarProjetoSemEquipe().subscribe((resultado)=>{

      this.projetosSemEquipe = resultado
      console.log(this.projetosSemEquipe);

    })

  }

  mostrarProjeto(){
    console.log(this.projetoSemEquipeEscolhido)
    this.projeto = this.projetoSemEquipeEscolhido

  }

  atribuirProjeto(){

    this.equipeService.mostrarUmaEquipe(this.id_equipe).subscribe((resultado)=>{
      this.equipe = resultado

    })

    this.equipeService.atribuirProjeto(this.equipe, this.id_equipe,this.projeto.id_projeto).subscribe({
      complete: () => {Swal.fire(
        'Tudo certo',
        'A tarefa foi atribuída para a equipe',
        'success'
        )
                      this.router.navigate(['/equipes'])},
      error: () => {Swal.fire(
        'Ops',
        'Erro ao atribuir tarefa para a equipe',
        'error'
        )
                    this.router.navigate(['/equipes']) }
    })



  }

  deixarEquipeSemProjeto(){
    Swal.fire({
      title: 'Tem certeza que deseja deixar a equipe sem tarefa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Voltar',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipeService.deixarEquipeSemProjeto (this.equipe, this.id_equipe,this.projeto.id_projeto).subscribe({
          complete: () => {Swal.fire(
            'Tudo certo',
            'A equipe agora está sem tarefa',
            'success'
            )
          this.router.navigate(['/equipes'])},
          error: () => {Swal.fire(
            'Ops',
            'Erro ao retirar a tarefa da equipe',
            'error'
            )
          this.router.navigate(['/equipes']) }
        })
      }
    })  
  }
}
