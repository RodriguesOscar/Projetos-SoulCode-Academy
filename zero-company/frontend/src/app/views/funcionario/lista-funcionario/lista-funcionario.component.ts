import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import {Location} from '@angular/common'


@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.buscarFuncionarios()
  }

  buscarFuncionarios(){

    this.funcionarioService.buscarTodosFuncionarios2().subscribe(resultado =>{
      this.funcionarios = resultado
      console.log(this.funcionarios)
    })


  }

  chamarFormularioCadastro(){
    this.router.navigate(['/funcionario/cadastrar'])
  }

  voltar(){
    this.location.back()
  }

}
