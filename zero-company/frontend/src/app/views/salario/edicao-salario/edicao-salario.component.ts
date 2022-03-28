import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salario } from 'src/app/models/salario.model';
import { SalarioService } from 'src/app/services/salario.service';
import {Location} from '@angular/common'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edicao-salario',
  templateUrl: './edicao-salario.component.html',
  styleUrls: ['./edicao-salario.component.css']
})
export class EdicaoSalarioComponent implements OnInit {

  codigo:any
  id_funcionario:any



  salario:Salario ={
    codigo:'',
    sl_descricao: '',
    sl_dataPagamento:'',
    sl_status: '',
    sl_valor: 0
  }

  constructor(private salarioService:SalarioService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.buscarSalario()
  }

 buscarSalario(){
    this.salarioService.buscarUmSalario(this.codigo).subscribe(resultado =>{
      this.salario = resultado
      console.log(resultado.sl_dataPagamento)
      this.salario.sl_dataPagamento = resultado.sl_dataPagamento.slice(0,10)
      console.log(this.salario.sl_dataPagamento)
    })
  }

  editarSalario(){
    this.salarioService.editarSalario(this.salario,this.codigo,this.id_funcionario).subscribe({
      complete: () =>{Swal.fire(
        'Tudo certo',
        'Recompensa editada com sucesso',
        'success'
        ), this.location.back()},
      error: () =>{Swal.fire(
        'Ops',
        'Erro ao editar recompensa',
        'error'
        ),this.location.back()}
    })
  }

  voltar(){
    this.location.back()
  }

}
