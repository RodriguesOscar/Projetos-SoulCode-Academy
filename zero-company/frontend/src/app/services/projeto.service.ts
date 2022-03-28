import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  baseUrl: String = 'http://localhost:8081/empresa'

  constructor(private http:HttpClient) { }

  buscarUmProjeto(id_projeto:String):Observable<Projeto>{
    const url = `${this.baseUrl}/projeto/${id_projeto}`
    return this.http.get<Projeto>(url)
  }

  buscarProjetoDaEquipe(id_equipe:String):Observable<Projeto>{
    const url = `${this.baseUrl}/projeto-equipe/${id_equipe}`
    return this.http.get<Projeto>(url)
  }

  buscarProjetoSemEquipe():Observable<Projeto[]>{
    const url = `${this.baseUrl}/projetoSemEquipe`
    return this.http.get<Projeto[]>(url)
  }

  buscarTodosProjetos():Observable<any>{

    const url = `${this.baseUrl}/projeto/projeto-equipe`
    return this.http.get<any>(url)
  }

  cadastrarProjeto(projeto:Projeto):Observable<Projeto>{
    const url = `${this.baseUrl}/projeto`
    return this.http.post<Projeto>(url,projeto);
  }

  editarProjeto(projeto: Projeto, id_projeto: string, id_equipe: String): Observable<Projeto> {
    const URL = `${this.baseUrl}/projeto/${id_projeto}?equipe=${id_equipe}`
    return this.http.put<Projeto>(URL, projeto)
  }
  // 4?equipe=5
  editarProjetoSemEquipe(projeto: Projeto, id_projeto:String): Observable<Projeto> {
    const URL = `${this.baseUrl}/projeto-sem-equipe/${id_projeto}`
    return this.http.put<Projeto>(URL, projeto)
  }

  // editarProjeto(projeto:Projeto,id_projeto:String):Observable<Projeto>{
  //   const url = `${this.baseUrl}/projeto/${id_projeto}`
  //   return this.http.put<Projeto>(url,projeto)
  // }

  excluirProjeto(id_projeto:string):Observable<void>{
    const url = `${this.baseUrl}/projeto/${id_projeto}`
    return this.http.delete<void>(url)
  }

}
