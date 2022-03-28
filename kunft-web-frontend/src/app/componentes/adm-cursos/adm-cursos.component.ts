import { AutorizacaoService } from '../../servicos/autorizacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adm-cursos',
  templateUrl: './adm-cursos.component.html',
  styleUrls: ['./adm-cursos.component.css']
})
export class AdmCursoComponent implements OnInit {

  constructor(private AutorizacaoService: AutorizacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.AutorizacaoService.deslogar()
    this.router.navigate(['/home'])
    return false
  }

}
