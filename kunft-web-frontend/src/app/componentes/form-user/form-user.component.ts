import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosUser } from 'src/app/models/dados-user';
import { DadosUserService } from 'src/app/servicos/dados-user.service';
import swal from 'sweetalert'


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  form: FormGroup
  id: string | undefined

  constructor(private fb: FormBuilder, private serviceDadosUser: DadosUserService) {

    this.form = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(2), Validators.pattern(/^(?!À-Ö)[A-Za-z\',\-àáâãçèéêẽíôõóúû ]*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      categoria: ['',[Validators.required]],
      conteudo: ['',[Validators.required, Validators.minLength(10)]]
    })

   }

  ngOnInit(): void {
  }

  enviarDadosUser(){
    const DADOSUSER: DadosUser = {

      nome: this.form.value.nome,
      email: this.form.value.email,
      categoria: this.form.value.categoria,
      conteudo: this.form.value.conteudo,
      dataCriacao: new Date(),
      dataAtualizacao: new Date()
    }
    console.log(this.form)
    console.log(DADOSUSER)
    this.serviceDadosUser.addDadosUser(DADOSUSER).then(() =>{
      swal({
       title: 'Formulário submetido com sucesso!',
       text: 'Obrigado, sua opinião é importante para nós. Entraremos em contato em breve.',
       icon: 'success',
      })
      this.form.reset()
    }, _error =>{
      swal({
        title: 'Ops! Erro ao submeter formulário.',
        text: ' Tente novamente',
        icon: 'error',
       })
    })
  }

}
