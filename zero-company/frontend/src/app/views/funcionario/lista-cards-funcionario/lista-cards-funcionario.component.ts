import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-lista-cards-funcionario',
  templateUrl: './lista-cards-funcionario.component.html',
  styleUrls: ['./lista-cards-funcionario.component.css']
})
export class ListaCardsFuncionarioComponent implements OnInit {

  funcionarios:Funcionario[] = []



  myURL = 'funcionario.func_foto'

  myTrustedURL: any

  constructor(private funcionarioService:FuncionarioService, private router: Router, private sanitizer: DomSanitizer) {
    this.myTrustedURL = sanitizer.bypassSecurityTrustResourceUrl(this.myURL);
   }

  ngOnInit(): void {
    this.buscarTodosFuncionarios()
  }

  buscarTodosFuncionarios(){

    this.funcionarioService.buscarTodosFuncionarios2().subscribe(resultado =>{
      this.funcionarios = resultado
      console.log("Caminho da foto " + resultado[0].func_foto)
    })

  }

  voltar(){
    this.router.navigate([`/lista-geral-funcionario`])
  }
}
