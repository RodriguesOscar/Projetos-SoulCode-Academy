import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/models/projeto.model';
import { ProjetoService } from 'src/app/services/projeto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar-projeto.component.html',
  styleUrls: ['./cadastrar-projeto.component.css']
})
export class CadastrarProjetoComponent implements OnInit {

  idProjetoCadastrado:any

  projetoCadastrado:boolean = false

  projeto:Projeto ={
    id_projeto:'',
    pro_nome:'',
    pro_descricao:''
  }



  constructor(private projetoService:ProjetoService,
              private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarProjeto(){
    this.projetoService.cadastrarProjeto(this.projeto).subscribe({
      complete: () => {Swal.fire(
        'Tudo certo',
        'Tarefa cadastrada com sucesso',
        'success'
        )
        this.router.navigate(['/projeto/lista-projeto'])},
      error: () => {Swal.fire(
        'Ops',
        'Erro ao cadastrar tarefa',
        'error'
        )
        this.router.navigate(['/projeto/lista-projeto'])}
    })
  }



}
