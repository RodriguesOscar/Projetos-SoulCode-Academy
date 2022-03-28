import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/models/equipe.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastro-equipe',
  templateUrl: './cadastro-equipe.component.html',
  styleUrls: ['./cadastro-equipe.component.css']
})
export class CadastroEquipeComponent implements OnInit {

  equipe:Equipe = {
    eqp_nome: '',
    eqp_atribuicao: '',
  }

  constructor(private equipeService: EquipeService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastroEquipe(): void{
    this.equipeService.cadastrarEquipe(this.equipe).subscribe((resposta) =>{
      console.log(resposta)
      Swal.fire(
        'Tudo certo',
        'Equipe cadastrada com sucesso',
        'success'
        )
      this.router.navigate(['/equipes'])
    },err =>{
      alert(err.error.message())
    },
    )
  }

  cancelarCadastro(){
    this.router.navigate(['/equipes'])
  }

}
