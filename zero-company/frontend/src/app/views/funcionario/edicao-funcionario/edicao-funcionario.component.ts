import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edicao-funcionario',
  templateUrl: './edicao-funcionario.component.html',
  styleUrls: ['./edicao-funcionario.component.css']
})
export class EdicaoFuncionarioComponent implements OnInit {

  funcionario:Funcionario ={
    id_funcionario: '',
    func_nome: '',
    func_cargo: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.buscarUmFuncionario()
  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado)=>{
      this.funcionario = resultado
    })
  }

  editarFuncionario(){
    this.funcionarioService.editarFuncionario(this.funcionario,this.funcionario.id_funcionario).subscribe({
    complete: () => { Swal.fire(
      'Tudo certo',
      'Monstro editado com sucesso',
      'success'
      )
      this.router.navigate(['/lista-geral-funcionario'])
    },
    error: () => { Swal.fire(
      'Ops',
      'Erro ao editar monstro',
      'error'
      )
      this.router.navigate(['/lista-geral-funcionario'])
    },
    next: () => { console.log("monstro editado com sucesso")}

    });

  }

  cancelarEdicao(){
    this.router.navigate(['/lista-geral-funcionario'])
  }

}
