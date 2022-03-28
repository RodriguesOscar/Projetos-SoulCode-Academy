import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nome:string
  valor:number
  data:string

  constructor(private router: Router) {
    this.nome = "",
    this.valor = 0,
    this.data = ""
   }

  ngOnInit(): void {
  }

  comprar(){
    Swal.fire(
      'Tudo certo!',
      'Seu pedido foi encaminhado com sucesso.',
      'success'
      )
      this.router.navigate(['/cards'])
  }
}
