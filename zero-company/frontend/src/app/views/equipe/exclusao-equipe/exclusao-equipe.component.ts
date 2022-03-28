import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from 'src/app/models/equipe.model';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-exclusao-equipe',
  templateUrl: './exclusao-equipe.component.html',
  styleUrls: ['./exclusao-equipe.component.css']
})
export class ExclusaoEquipeComponent implements OnInit {

  equipe:Equipe = {
    id_equipe: '',
    eqp_nome: '',
    eqp_atribuicao: ''
  }

  constructor(private equipeService: EquipeService, private route: ActivatedRoute,private router: Router) { }

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

  excluirEquipe(){
    Swal.fire({
      title: 'Tem certeza que deseja excluir a equipe?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Voltar',
      confirmButtonText: 'Sim',
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipeService.excluirEquipe(this.equipe.id_equipe).subscribe({
          complete: () => { 
            Swal.fire(
              'Feito!',
              'Equipe excluída com sucesso',
              'success'
            )
            this.router.navigate(['/equipes'])},
          error: () => { Swal.fire(
              'Ops',
              'Essa equipe possui uma tarefa ou um monstro associados, não pode ser excluída',
              'error'
              )
              this.router.navigate(['/equipes']) },
          next: () => { console.log("equipe excluída com sucesso")}
        });
      }
    })
  }

  cancelarExclusao(){
    this.router.navigate(['/equipes'])
  }

}
