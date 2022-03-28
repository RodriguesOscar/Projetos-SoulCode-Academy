import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';
import { Funcionario } from 'src/app/models/funcionario.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-atribuir-equipe',
  templateUrl: './atribuir-equipe.component.html',
  styleUrls: ['./atribuir-equipe.component.css']
})
export class AtribuirEquipeComponent implements OnInit {

  equipes:Equipe[] = []
  equipeEscolhida: any = []
  id_equipe:any
  id_funcionario:any
  equipeDoFuncionario:any = []

  funcionario:Funcionario ={
    id_funcionario:'',
    func_nome:'',
    func_cargo:'',
    func_cidade:'',
    func_foto:''
  }

  constructor(private equipeService:EquipeService,
    private funcionarioService:FuncionarioService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.id_equipe = this.route.snapshot.paramMap.get('id_equipe')
    console.log(this.id_equipe)
    this.buscarTodasEquipes()
    this.mostrarFuncionario()
    this.buscarEquipe()
  }

  buscarTodasEquipes(){
    this.equipeService.mostrarTodasEquipes().subscribe(resultado =>{
      this.equipes = resultado
    })
  }

  mostrarEquipe(){
    console.log(this.equipeEscolhida)
  }

  mostrarFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.id_funcionario).subscribe(resultado =>{
      this.funcionario = resultado
    })
  }

  buscarEquipe(){
    this.equipeService.mostrarUmaEquipe(this.id_equipe).subscribe(resultado =>{
      this.equipeEscolhida = resultado
      console.log(this.equipeDoFuncionario)
    })
  }

  atribuirEquipe(){
    this.funcionarioService.atribuirEquipe(this.equipeEscolhida,this.id_funcionario).subscribe({
      complete: () => { Swal.fire(
        'Tudo certo',
        'Monstro cadastrado na equipe com sucesso',
        'success'
        )
        this.router.navigate(['/lista-geral-funcionario'])

                      },
      error: () => { Swal.fire(
        'Ops',
        'O monstro não pôde ser cadastrado na equipe',
        'error'
        )
        this.router.navigate(['/lista-geral-funcionario'])

                      },
      next: () => { console.log("Monstro cadastrado com sucesso")}

      });
  }

  deixarFuncionarioSemEquipe(){
    Swal.fire({
      title: 'Tem certeza que deseja deixar o monstro sem equipe?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Voltar',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        this.funcionarioService.deixarFuncionarioSemEquipe (this.funcionario,this.id_funcionario).subscribe({
          complete: () => { Swal.fire(
            'Tudo certo',
            'O monstro foi retirado da equipe com sucesso',
            'success'
            )
            this.router.navigate(['/lista-geral-funcionario'])},
          error: () => { Swal.fire(
            'Ops',
            'O monstro não pôde ser retirado da equipe',
            'error'
            )
            this.router.navigate(['/lista-geral-funcionario'])},
          next: () => { console.log("Monstro editado com sucesso")}
        });
      }
    })  
  }

}
