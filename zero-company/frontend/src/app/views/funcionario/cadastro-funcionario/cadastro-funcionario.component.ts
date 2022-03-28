import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_equipe: string = ''
  equipes:any
  equipeEscolhida: any

  foto:any

  idFuncionarioCadastrado:any

  funcionarioCadastrado:boolean = false

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cargo: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService, private router: Router, private route: ActivatedRoute, private http:HttpClient) {}

  ngOnInit(): void {
    this.id_equipe = this.route.snapshot.paramMap.get('id_equipe')!
    // this.mostrarEquipesParaAtribuicao()
  }

  confirmarCadastroFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe({
    complete: () => { Swal.fire(
      'Tudo certo',
      'Monstro cadastrado com sucesso',
      //. Que tal atribuir uma foto para ele?
      'success'
      ), this.funcionarioService.buscarFuncionarioPeloNome(this.funcionario.func_nome).subscribe(resultado =>{
      console.log(resultado)
      this.idFuncionarioCadastrado = resultado.id_funcionario
      this.funcionarioCadastrado = true
      this.router.navigate(['/lista-geral-funcionario'])
    })},
    error: () => { Swal.fire(
      'Ops',
      'Erro ao cadastrar monstro',
      'error'
      )},
    // , this.router.navigate(['/funcionariosComEquipe'])
    // next: () => { console.log("Funcionario cadastrado com sucesso")}
    });

  }

  cancelarCadastro(){
    this.router.navigate([`/lista-geral-funcionario`])
  }

  // mostrarEquipesParaAtribuicao(){
  //   this.equipeService.mostrarTodasEquipes().subscribe(resultado =>{
  //     this.equipes = resultado
  //   })
  // }

  // escolherEquipe(){
  //   console.log(this.equipeEscolhida)
  // }

  subirFoto(event:any){


    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]
      console.log(this.foto)
      const formData = new FormData
      formData.append("foto",this.foto)

      const nome:string = this.funcionario.func_nome + "-" + event.target.files[0].name


      this.http.post(`http://localhost:8081/empresa/envio/${this.idFuncionarioCadastrado}?nome=${nome}`,formData).subscribe({
        next: () => console.log("Foto enviada com sucesso")
      })

      Swal.fire(
        'Tudo certo',
        'Foto associada ao monstro com sucesso',
        'success'
        )
        this.router.navigate(['/lista-geral-funcionario'])

    }
  }

}
