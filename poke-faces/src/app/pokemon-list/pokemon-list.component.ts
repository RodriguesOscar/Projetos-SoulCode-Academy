import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../servicos/pokemon.service';
// import { pokepoke } from 'src/app/pokemon-model/poke-model'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemon:any

  // pokemons = ["1","2","3","4"]

  // pokemons = ['pikachu1','pikachu1','pikachu1','pikachu1','pikachu1','pikachu1','pikachu1',]

  constructor(public pokemonService:PokemonService ) { 
    this.pokemon= []
    this.busca()
   }

  ngOnInit(): void {
  }

  busca(){
    //fazer uma subscrição (subscribe) na função getMensagem, que foi criada no crudService
    this.pokemonService.getPokemon().subscribe({
      //next é um dos retornos possíveis do subscribe (quando a função teve êxito)
      next: (resultado) => {this.pokemon = resultado.results},
      //error é outro dos retornos do subscribe (quando a função não pôde ser executada por algum erro)
      error: (erro) => console.error(erro),
      //complete é   
      complete: () => console.log ('Busca completada com êxito')
    })  
    console.log(this.pokemon)
  }

}
