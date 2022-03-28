import { Component, OnInit} from '@angular/core'
import { Curso } from 'src/app/models/Curso'
import { CursoService } from 'src/app/servicos/cursos.service'
import swal from 'sweetalert'


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursoComponent implements OnInit {

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
    console.log(this.cursos)
  }

  excluir(id:any){
    swal({
      title: "Tem certeza que deseja excluir o curso?",
      text: "Uma vez excluído, não é possível recuperar o item.",
      icon: "warning",
      buttons: ["Cancelar", true],
      dangerMode: true,
      closeOnEsc: false,
      closeOnClickOutside: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.cursoService.excluirCurso(id)
        swal("Curso excluído com sucesso!", {
          icon: "success",
          closeOnEsc: false,
          closeOnClickOutside: false,
        });
      } else {
        swal("O seu curso está a salvo :)");
      }
    });
    
  }

  editar(curso: Curso){
    this.cursoService.mostrarCursoEdit(curso)
  }
  
}
