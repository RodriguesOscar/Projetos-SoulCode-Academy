import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/models/equipe.model';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-edicao-equipe',
  templateUrl: './edicao-equipe.component.html',
  styleUrls: ['./edicao-equipe.component.css']
})
export class EdicaoEquipeComponent implements OnInit {

  equipe: Equipe = {
    id_equipe: '',
    eqp_nome: '',
    eqp_atribuicao: ''
  }

  constructor(private equipeService:EquipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.equipe.id_equipe = this.route.snapshot.paramMap.get('id')
    this.mostrarUmaEquipe()
  }

  mostrarUmaEquipe(){
    this.equipeService.mostrarUmaEquipe(this.equipe.id_equipe).subscribe((resultado) => {
      this.equipe = resultado
      console.log(this.equipe)

    })
  }

  editarEquipe(){
    this.equipeService.editarEquipe(this.equipe).subscribe({
    complete: () => { Swal.fire(
      'Tudo certo',
      'Equipe editada com sucesso',
      'success'
      )
                      this.router.navigate(['/equipes'])},
    error: () => { Swal.fire(
      'Ops',
      'Erro ao editar equipe',
      'error'
      )
                  this.router.navigate(['/equipes']) },
    next: () => { console.log("equipe editada com sucesso")}

    });

  }

  cancelarEdicao(){
    this.router.navigate(['/equipes'])
  }

}
