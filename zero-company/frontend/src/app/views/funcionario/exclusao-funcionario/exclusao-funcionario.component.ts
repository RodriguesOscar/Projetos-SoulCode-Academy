import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {

  id_equipe: string = ''

  funcionario:Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cargo: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.buscarUmFuncionario()
  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado)=>{
      this.funcionario = resultado
    })
  }

  cancelarExclusao(){
    this.router.navigate(['/lista-geral-funcionario'])
  }

  excluirFuncionario(){
    Swal.fire({
      title: 'Tem certeza que deseja excluir o monstro?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Voltar',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        this.funcionarioService.excluirFuncionario(this.funcionario.id_funcionario).subscribe({
          complete: () => { Swal.fire(
            'Tudo certo',
            'Monstro excluído com sucesso',
            'success'
            )
          this.router.navigate(['/lista-geral-funcionario'])},
          error: () => { Swal.fire(
            'Ops',
            'Erro ao excluir monstro',
            'error'
            )
          this.router.navigate(['/lista-geral-funcionario']) },
          next: () => { console.log("monstro excluído com sucesso")}
    
        });
      }
    })
  }
}
