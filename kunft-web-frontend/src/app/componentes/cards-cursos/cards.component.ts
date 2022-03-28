import { Component, OnInit } from '@angular/core'
import { CursoService } from 'src/app/servicos/cursos.service'
import { Curso } from 'src/app/models/Curso'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cursos: Curso[] = []

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.mostrarCursos()
  }

  mostrarCursos(){
    this.cursoService.listarCursos().subscribe(doc =>{
      console.log(doc)
      this.cursos = []
      doc.forEach((element:any) => {
        this.cursos.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
    console.log('estamos aqui')
    console.log(this.cursos)
  }

}
