import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salario } from 'src/app/models/salario.model';
import { SalarioService } from 'src/app/services/salario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-exclusao-salario',
  templateUrl: './exclusao-salario.component.html',
  styleUrls: ['./exclusao-salario.component.css']
})
export class ExclusaoSalarioComponent implements OnInit {

  codigo:any
  id_funcionario:any

  statusEscolhidoNoSelect:any

  statusParaEscolha:string[] = []

  salario:Salario ={
    codigo:'',
    sl_descricao:'',
    sl_dataPagamento:'',
    sl_status:'',
    sl_valor:0
  }

  constructor(private salarioService:SalarioService,
              private route:ActivatedRoute,
              private router:Router,
              private location: Location) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.statusParaEscolha = ['RECEBIDO','CANCELADO','PENDENTE']
    this.mostrarSalario()
  }

  mostrarSalario(){
    this.salarioService.buscarUmSalario(this.codigo).subscribe(resultado =>{
      this.salario = resultado
      this.salario.sl_status = resultado.sl_status
    })
  }

  excluirSalario(){
    Swal.fire({
      title: 'Tem certeza que deseja excluir a recompensa?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Voltar',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        this.salarioService.excluirSalario(this.codigo).subscribe({
          complete: () => {Swal.fire(
            'Tudo certo',
            'Recompensa excluída com sucesso',
            'success'
            )
          this.router.navigate([`/salario/lista-funcionario/${this.id_funcionario}`])},
          error: () => {Swal.fire(
            'Ops',
            'Erro ao excluir recompensa',
            'error'
            )}
        })
      }
    })  
  }

  statusEscolhido(){
    console.log(this.statusEscolhidoNoSelect)
    this.salario.sl_status = this.statusEscolhidoNoSelect

  }

  voltar(){
    this.location.back()
  }

}
