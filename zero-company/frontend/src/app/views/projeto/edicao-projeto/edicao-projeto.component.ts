import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';
import { Projeto } from 'src/app/models/projeto.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { ProjetoService } from 'src/app/services/projeto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edicao-projeto',
  templateUrl: './edicao-projeto.component.html',
  styleUrls: ['./edicao-projeto.component.css']
})
export class EdicaoProjetoComponent implements OnInit {

  projeto:Projeto ={
    id_projeto: '',
    pro_nome: '',
    pro_descricao: ''
  }
  id_equipe: any

  constructor(private projetoService: ProjetoService, private equipeService:EquipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.projeto.id_projeto = this.route.snapshot.paramMap.get('id_projeto')
    this.buscarUmProjeto()
  }

  buscarUmProjeto(){
    this.projetoService.buscarUmProjeto(this.projeto.id_projeto).subscribe((resultado)=>{
      this.projeto = resultado
    })
  }

  editarProjeto() {
    if (this.id_equipe != 0) {
      this.projetoService.editarProjeto(this.projeto, this.projeto.id_projeto, this.id_equipe).subscribe({
        complete: () => { Swal.fire(
          'Tudo certo',
          'Tarefa editada com sucesso',
          'success'
        )
        this.router.navigate(['/projeto/lista-projeto'])},
        error: () => { Swal.fire(
          'Ops',
          'Erro ao editar tarefa',
          'error'
        )
        this.router.navigate(['/projeto/lista-projeto']) },
        next: () => { console.log("Tarefa editada com sucesso")}
      })
    }else{
      this.projetoService.editarProjetoSemEquipe(this.projeto, this.projeto.id_projeto).subscribe({
        complete: () => { Swal.fire(
          'Tudo certo',
          'Tarefa editada com sucesso',
          'success'
        )
        this.router.navigate(['/projeto/lista-projeto'])},
        error: () => { Swal.fire(
          'Ops',
          'Erro ao editar tarefa',
          'error'
        )
        this.router.navigate(['/projeto/lista-projeto']) },
        next: () => { console.log("Tarefa editada com sucesso")}
      })
    }

  }
  // editarProjeto(){
  //   this.projetoService.editarProjeto(this.projeto,this.projeto.id_projeto).subscribe({
  //   complete: () => { Swal.fire(
  //     'Tudo certo',
  //     'Tarefa editada com sucesso',
  //     'success'
  //     )
  //   this.router.navigate(['/projeto/lista-projeto'])},
  //   error: () => { Swal.fire(
  //     'Ops',
  //     'Erro ao editar tarefa',
  //     'error'
  //     )
  //     this.router.navigate(['/projeto/lista-projeto']) },
  //   next: () => { console.log("Tarefa cadastrada com sucesso")}

  //   });

  // }

  cancelarEdicao(){
    this.router.navigate(['/projeto/lista-projeto'])
  }

}
