import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';
import { Equipe } from '../models/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = 'http://localhost:8081/empresa'

  constructor(private http: HttpClient) { }

  buscarFuncionariosEquipe(id_equipe: String): Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/busca-equipe/${id_equipe}`
    return this.http.get<Funcionario[]>(url)
  }

  buscarTodosFuncionarios():Observable<any>{
    const url = `${this.baseUrl}/funcionario-equipe`
    return this.http.get<any>(url)
  }

  // para buscar a foto
  buscarTodosFuncionarios2():Observable<any>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<any>(url)
  }

  buscarUmFuncionario(id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)

  }

  buscarFuncionarioPeloNome(func_nome:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario-nome/${func_nome}`
    return this.http.get<Funcionario>(url)
  }

  cadastrarFuncionario(funcionario:Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.post<Funcionario>(url,funcionario);
  }

  editarFuncionario(funcionario:Funcionario,id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.put<Funcionario>(url,funcionario)
  }

  excluirFuncionario(id_funcionario:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }

  atribuirEquipe(equipe:Equipe, id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/inserirEquipe/${id_funcionario}`
    return this.http.put<Funcionario>(url,equipe)

  }

  deixarFuncionarioSemEquipe(funcionario:Funcionario, id_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/deixarSemEquipe/${id_funcionario}`
    return this.http.put<Funcionario>(url,funcionario)
  }




}



// cadastrarFuncionario(funcionario:Funcionario, id_equipe:String):Observable<Funcionario>{
//   const url = `${this.baseUrl}/funcionario?equipe=${id_equipe}`
//   return this.http.post<Funcionario>(url, funcionario)
// }

// editarFuncionario(funcionario:Funcionario, id_funcionario:String, id_equipe:String):Observable<Funcionario>{
//   const url = `${this.baseUrl}/funcionario/${id_funcionario}?equipe=${id_equipe}`
//   return this.http.put<Funcionario>(url, funcionario)
// }

// excluirFuncionario(id_funcionario: String):Observable<void>{
//   const url = `${this.baseUrl}/funcionario/${id_funcionario}`
//   return this.http.delete<void>(url)
// }
