import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from 'src/app/models/projeto.model';
import { ProjetoService } from 'src/app/services/projeto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-exclusao-projeto',
  templateUrl: './exclusao-projeto.component.html',
  styleUrls: ['./exclusao-projeto.component.css']
})
export class ExclusaoProjetoComponent implements OnInit {

  id_equipe: string = ''

  projeto:Projeto = {
    id_projeto: '',
    pro_nome: '',
    pro_descricao: ''
  }

  constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.projeto.id_projeto = this.route.snapshot.paramMap.get('id_projeto')
    this.buscarUmProjeto()
  }

  buscarUmProjeto(){
    this.projetoService.buscarUmProjeto(this.projeto.id_projeto).subscribe((resultado)=>{
      this.projeto = resultado
    })
  }

  cancelarExclusao(){
    this.router.navigate(['/projeto/lista-projeto'])
  }

  excluirProjeto(){
    Swal.fire({
      title: 'Tem certeza que deseja excluir a tarefa?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Voltar',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        this.projetoService.excluirProjeto(this.projeto.id_projeto).subscribe({
          complete: () => { Swal.fire(
            'Tudo certo',
            'Tarefa excluída com sucesso',
            'success'
            )
          this.router.navigate(['/projeto/lista-projeto'])},
          error: () => { Swal.fire(
            'Ops',
            'Erro ao excluir tarefa',
            'error'
            )
          this.router.navigate(['/projeto/lista-projeto']) },
          next: () => { console.log("Tarefa excluída com sucesso")}
    
        });
      }
    })
  }
}
