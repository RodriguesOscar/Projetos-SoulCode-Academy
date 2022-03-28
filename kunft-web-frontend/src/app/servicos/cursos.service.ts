import { Curso } from 'src/app/models/Curso';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable, Subject } from 'rxjs'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  storageRef = firebase.app().storage().ref()

  private cursoEdit = new Subject<any>()

  constructor(private firebaseAngular: AngularFirestore) { }

  addCurso(curso: Curso):Promise<any>{
    return this.firebaseAngular.collection('cursos').add(curso)
  }

  listarCursos():Observable<any>{
    return this.firebaseAngular.collection('cursos',ordem => ordem.orderBy('tema')).snapshotChanges()
  }

  excluirCurso(id:string):Promise<any>{
    return this.firebaseAngular.collection('cursos').doc(id).delete()
  }
  
  mostrarCursoEdit(curso: Curso){
    this.cursoEdit.next(curso)
  }

  getCursoEdit():Observable<Curso>{
    return this.cursoEdit.asObservable()
  }

  editarCurso(id:string,curso:any):Promise<any>{
    return this.firebaseAngular.collection('cursos').doc(id).update(curso)
  }

  async carregarImagem(nome:string, imgBase64:any){
    try{
    let resultado = await this.storageRef.child("imgFoto/" + nome).putString(imgBase64, 'data_url')
    console.log(resultado)
    return await resultado.ref.getDownloadURL()
    }catch(err){
      console.log(err)
      return null
    }
  }
}
