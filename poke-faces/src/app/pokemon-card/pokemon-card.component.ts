import { Component, Input, OnInit } from '@angular/core';
 


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: string

  @Input()
  numero: number

  constructor() {
    this.pokemon = ""
    this.numero = 0
  }

  ngOnInit(): void {
  }

  pegarImagemPokemon() {
    //outra forma mais fácil pra colocar 0s a direita ou esquerda
    // const numeroFormatado = String(this.numero).padStart(3, '0');

    //usar essa const junto com o leadingZero
    const numeroFormatado = this.leadingZero(this.numero)
    
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }
  // Lembrar de pesquisar sobre LeadingZero
  leadingZero(str: string | number): string {
    let x = String(str)
    while (x.length < 3) {
      x = '0' + x
    }
    return x
  }

}
