import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  cor:string
  quantidade:number
  camisaResultado:number

  constructor() {
    this.cor = ""
    this.quantidade = 0
    this.camisaResultado = 0
   }

  ngOnInit(): void {
  }

  calcularCamisas(){
    this.camisaResultado = (this.quantidade * 50)
  }

}
