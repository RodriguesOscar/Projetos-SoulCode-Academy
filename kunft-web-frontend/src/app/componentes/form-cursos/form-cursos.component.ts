import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Curso} from 'src/app/models/Curso'
import { CursoService } from 'src/app/servicos/cursos.service';
import swal from 'sweetalert'


@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css']
})
export class FormCursoComponent implements OnInit {

  form: FormGroup
  id: string | undefined
  tituloForm: string = "Cadastrar Cursos"
  imagem: any = ""
  urlImagem: any = ""

  constructor(private fb: FormBuilder, private serviceCurso: CursoService) {

    this.form = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      tema: ['',[Validators.required]],
      descricao: ['',[Validators.required, Validators.minLength(10)]],
      preco: ['',[Validators.required, Validators.minLength(4)]],
      foto: ['']
    })
   }

  ngOnInit(): void {
    this.serviceCurso.getCursoEdit().subscribe(resultado => {
      this.id = resultado.id
      this.tituloForm = "Editar Cursos"
      this.form.patchValue({
        nome:resultado.nome,
        tema:resultado.tema,
        descricao:resultado.descricao,
        preco:resultado.preco,
        foto:resultado.foto
      })
    })
  }

  carregarImagem(event: any){
    let arquivo = event.target.files
    let reader = new FileReader()

    reader.readAsDataURL(arquivo[0])
    reader.onloadend = () =>{
      console.log(reader.result)
      this.imagem = reader.result
      this.serviceCurso.carregarImagem("curso" + Date.now(), reader.result).then(resultado => {
        console.log(resultado)
        this.urlImagem = resultado
      })
    }
  }

  salvarCurso(){
    if(this.id === undefined){
      this.cadastrarCurso()
    }else{
      this.editarCurso(this.id)
    }
  }

  cadastrarCurso(){
    const CURSO: Curso = {

      nome: this.form.value.nome,
      tema: this.form.value.tema,
      descricao: this.form.value.descricao,
      preco: this.form.value.preco,
      foto: this.urlImagem,
      dataCriacao: new Date(),
      dataAtualizacao: new Date()
    }
    console.log(this.form)
    console.log(CURSO)
    this.serviceCurso.addCurso(CURSO).then(() =>{
      swal({
       title: 'Tudo certo!',
       text: 'Curso cadastrado com sucesso.',
       icon: 'success',
      })
      this.form.reset()
    }, _error =>{
      swal({
        title: 'Ops!',
        text: 'Erro ao cadastrar curso.',
        icon: 'error',
       })
    })
  }

  editarCurso(id:string){
    const CURSO: any = {

      nome: this.form.value.nome,
      tema: this.form.value.tema,
      descricao: this.form.value.descricao,
      preco: this.form.value.preco,
      foto: this.urlImagem,
      dataAtualizacao: new Date()
    }
    this.serviceCurso.editarCurso(id,CURSO).then(() =>{
      this.form.reset()
      this.tituloForm = "Cadastrar Curso"
      this.id = undefined
      swal({
        title: 'Tudo certo!',
        text: 'Curso editado com sucesso.',
        icon: 'success',
       })
    }, _error =>{
      swal({
        title: 'Ops!',
        text: 'Erro ao cadastrar curso.',
        icon: 'error',
       })
    })
  }


}
