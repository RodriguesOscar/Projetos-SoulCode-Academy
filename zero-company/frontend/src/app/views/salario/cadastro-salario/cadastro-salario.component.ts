import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salario } from 'src/app/models/salario.model';
import { SalarioService } from 'src/app/services/salario.service';
import {Location} from '@angular/common'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastro-salario',
  templateUrl: './cadastro-salario.component.html',
  styleUrls: ['./cadastro-salario.component.css']
})
export class CadastroSalarioComponent implements OnInit {

  id_funcionario: any

  salario: Salario ={
    codigo: '',
    sl_descricao: '',
    sl_dataPagamento: '',
    sl_valor: 0,
    sl_status: 'PENDENTE'

  }
  constructor(private salarioService: SalarioService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
  }

  cadastrarSalario(){
    this.salarioService.cadastrarSalario(this.salario, this.id_funcionario).subscribe({
      complete: () => {Swal.fire(
        'Tudo certo',
        'Recompensa cadastrada com sucesso',
        'success'
        ), this.location.back()},
      error: () => {Swal.fire(
        'Ops',
        'Erro ao cadastrar recompensa',
        'error'
        ), this.location.back()}
    })
  }

  cancelarCadastro(){
    this.location.back()
  }

}
