import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salario } from 'src/app/models/salario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SalarioService } from 'src/app/services/salario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-salario-funcionario',
  templateUrl: './lista-salario-funcionario.component.html',
  styleUrls: ['./lista-salario-funcionario.component.css']
})
export class ListaSalarioFuncionarioComponent implements OnInit {

  id_funcionario: any

  nomeFuncionario: String = ''

  recebido:boolean = false
  cancelado:boolean = false

  salarios: Salario[] = []

  salario:Salario ={
    codigo:'',
    sl_descricao:'',
    sl_dataPagamento:'',
    sl_status:'',
    sl_valor:0
  }

  constructor(private salarioService: SalarioService, private route: ActivatedRoute, private router: Router, private funcionarioService: FuncionarioService) {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
  }

  ngOnInit(): void {
    this.listarSalarios()
    this.buscarFuncionario()
  }

  listarSalarios(){
    this.salarioService.listarSalariosDoFuncionario(this.id_funcionario).subscribe(resultado =>{
      this.salarios = resultado
      console.log(resultado)
    })
  }

  buscarFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.id_funcionario).subscribe(resultado => {
      this.nomeFuncionario = resultado.func_nome
    })
  }

  pagarSalario(salario: Salario, codigo: any){
    this.salarioService.pagarSalario(salario, codigo).subscribe({
      complete: () => {Swal.fire(
        'Tudo certo',
        'Recompensa atribuída com sucesso',
        'success'
        ), this.listarSalarios()},
      error: () => {Swal.fire(
        'Ops',
        'Erro ao efetivar recompensa',
        'error'
        )}
    })
  }

  cancelarSalario(salario: Salario, codigo: any){
    this.salarioService.cancelarSalario(salario, codigo).subscribe({
      complete: () => {Swal.fire(
        'Tudo certo',
        'Atribuição de recompensa cancelada com sucesso',
        'success'
        ), this.listarSalarios()},
      error: () => {Swal.fire(
        'Ops',
        'Erro ao cancelar a atribuição da recompensa',
        'error'
        )}
    })
  }

}
