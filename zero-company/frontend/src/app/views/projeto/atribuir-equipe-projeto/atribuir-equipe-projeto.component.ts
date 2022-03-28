import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';
import { Projeto } from 'src/app/models/projeto.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { ProjetoService } from 'src/app/services/projeto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-atribuir-equipe-projeto',
  templateUrl: './atribuir-equipe-projeto.component.html',
  styleUrls: ['./atribuir-equipe-projeto.component.css']
})
export class AtribuirEquipeProjetoComponent implements OnInit {

  id_projeto:any

  equipesSemProjeto:any
  equipeSemProjetoEscolhida:any = []
  projetoSemEquipeEscolhido: any = []

  projeto:Projeto ={
    id_projeto:'',
    pro_nome:'',
    pro_descricao:''
  }

  equipe:Equipe = {
    id_equipe:'',
    eqp_nome:'',
    eqp_atribuicao:''
  }

  constructor(private projetoService:ProjetoService,
    private route:ActivatedRoute,
    private router:Router,
    private equipeService:EquipeService) { }

  ngOnInit(): void {
    this.id_projeto = this.route.snapshot.paramMap.get('id_projeto')
    this.buscarProjeto()
    this.buscarProjetoDaEquipe()
    this.buscarEquipeSemProjeto()
  }

  buscarProjeto(){
    this.projetoService.buscarUmProjeto(this.id_projeto).subscribe(resultado =>{
      this.projeto = resultado
    })
  }
  buscarProjetoDaEquipe(){
    this.equipeService.buscarEquipeDoProjeto(this.id_projeto).subscribe(resultado =>{

      if(resultado == null){
        Swal.fire(
          'Hey',
          'Para essa tarefa não está atribuída uma equipe. Que tal mudar isso?',
          'info'
        )

      }else{
        this.equipe = resultado
        console.log(resultado);
      }


    })
  }

  buscarEquipeSemProjeto(){

    this.equipeService.mostrarEquipesSemProjeto().subscribe((resultado)=>{

      this.equipesSemProjeto = resultado
      console.log(resultado);

    })

  }

  escolherEquipe(){
    console.log(this.equipeSemProjetoEscolhida)
    this.equipe = this.equipeSemProjetoEscolhida

  }

  atribuirEquipe(){

    this.projetoService.buscarUmProjeto(this.id_projeto).subscribe((resultado)=>{
      this.projeto = resultado

    })

    this.equipeService.atribuirProjeto(this.equipe, this.equipe.id_equipe,this.projeto.id_projeto).subscribe({
      complete: () => {Swal.fire(
        'Tudo certo',
        'A equipe foi atribuída para a tarefa',
        'success'
      )
                      this.router.navigate(['/projeto/lista-projeto'])},
      error: () => {Swal.fire(
        'Ops',
        'Erro ao atribuir equipe para a tarefa',
        'error'
      )
                    this.router.navigate(['/projeto/lista-projeto']) }
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
        this.equipeService.deixarEquipeSemProjeto (this.equipe, this.equipe.id_equipe,this.projeto.id_projeto).subscribe({
          complete: () => {Swal.fire(
            'Tudo certo',
            'Agora a equipe está sem tarefa',
            'success'
            )
          this.router.navigate(['/equipes'])},
          error: () => {Swal.fire(
            'Ops',
            'Erro ao retirar a equipe da tarefa',
            'error'
            )
          this.router.navigate(['/equipes'])}
        })
      }
    })  
  }

}
