import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipe } from '../models/equipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  baseUrl: String = 'http://localhost:8081/empresa'

  constructor(private http: HttpClient) { }

  mostrarTodasEquipes():Observable<Equipe[]>{

    const url = `${this.baseUrl}/equipe`
    return this.http.get<Equipe[]>(url)
  }

  mostrarEquipesSemProjeto():Observable<Equipe[]>{

    const url = `${this.baseUrl}/equipeSemProjeto`

    return this.http.get<Equipe[]>(url)
  }

  mostrarUmaEquipe(id:String):Observable<Equipe>{
    const url = `${this.baseUrl}/equipe/${id}`
    return this.http.get<Equipe>(url)

  }

  buscarEquipeDoProjeto(id_projeto:String):Observable<Equipe>{
    const url = `${this.baseUrl}/equipe/equipe-projeto/${id_projeto}`
    return this.http.get<Equipe>(url)
  }

  buscarTodasEquipes():Observable<any>{

    const url = `${this.baseUrl}/equipe/equipe-projeto`
    return this.http.get<any>(url)
  }

  cadastrarEquipe(equipe:Equipe):Observable<Equipe>{
    const url = `${this.baseUrl}/equipe`
    return this.http.post<Equipe>(url,equipe)
  }

  excluirEquipe(id:String):Observable<void>{
    const url = `${this.baseUrl}/equipe/${id}`
    return this.http.delete<void>(url)
  }

  editarEquipe(equipe:Equipe):Observable<void>{
    const url = `${this.baseUrl}/equipe/${equipe.id_equipe}`
    return this.http.put<void>(url, equipe)
  }

  atribuirProjeto(equipe: Equipe, id_equipe:String, id_projeto:String):Observable<void>{
    const url = `${this.baseUrl}/equipe/definirProjeto/${id_equipe}/${id_projeto}`
    return this.http.put<void>(url, equipe)
  }

  deixarEquipeSemProjeto(equipe:Equipe,id_equipe:String, id_projeto:String):Observable<void>{

    const url = `${this.baseUrl}/equipe/tirarProjeto/${id_equipe}/${id_projeto}`
    return this.http.put<void>(url,equipe);

  }

}
