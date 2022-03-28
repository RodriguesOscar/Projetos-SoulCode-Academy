import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AutorizacaoService } from 'src/app/servicos/autorizacao.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private auth: AngularFireAuth, private router: Router, private fb: FormBuilder, private autorizacao: AutorizacaoService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
    
  }

  fazerLogin(){
    this.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.senha).then(user => {
      console.log(user)
      this.autorizacao.autorizar()
      this.router.navigate(['/adm-curso'])
    }).catch(error =>{
      console.log(error)
      this.autorizacao.deslogar()
      this.router.navigate(['/home'])
    })
  }

}
