import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // pokemons = []

  constructor(private http: HttpClient) { 
    // this.pegarPokemon()
  }

  //  async pegarPokemon(){
  //    const resultado = await this.http.get<any>("https://pokeapi.co/api/v2/pokemon?limit=151").toPromise()
  //    this.pokemons = resultado.results
  //    console.log(resultado)
  //    console.log(this.pokemons)
  //  }
  public getPokemon():Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  }
}
