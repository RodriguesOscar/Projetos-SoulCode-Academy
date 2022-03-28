import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salario } from '../models/salario.model';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  baseUrl: String = 'http://localhost:8081/empresa'

  constructor(private http: HttpClient) { }

  buscarUmSalario(codigo:string):Observable<Salario>{

    const url = `${this.baseUrl}/funcionario/salario/${codigo}`
    return this.http.get<Salario>(url)
  }

  listarSalariosDoFuncionario(id_funcionario: String):Observable<Salario[]>{
    const url = `${this.baseUrl}/funcionario/salariosDoFuncionario/${id_funcionario}`
    return this.http.get<Salario[]>(url)
  }

  cadastrarSalario(salario:Salario, id_funcionario:String):Observable<Salario>{
    const url = `${this.baseUrl}/funcionario/salario/${id_funcionario}`
    return this.http.post<Salario>(url,salario)
  }

  pagarSalario(salario: Salario, codigo:string):Observable<Salario>{
    const url = `${this.baseUrl}/funcionario/pagarSalario/${codigo}`
    return this.http.put<Salario>(url, salario)
  }

  cancelarSalario(salario: Salario, codigo:string):Observable<Salario>{
    const url = `${this.baseUrl}/funcionario/cancelarSalario/${codigo}`
    return this.http.put<Salario>(url, salario)
  }

  editarSalario(salario: Salario, codigo: String, id_funcionario:string):Observable<Salario>{
    const url = `${this.baseUrl}/funcionario/salario/${codigo}/${id_funcionario}`
    return this.http.put<Salario>(url,salario)
  }

  excluirSalario(codigo:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/salario/${codigo}`
    return this.http.delete<void>(url)
  }

}
