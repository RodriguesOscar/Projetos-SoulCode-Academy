import { Injectable } from '@angular/core';
import { DadosUser } from '../models/dados-user';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import 'firebase/compat/storage'

@Injectable({
  providedIn: 'root'
})
export class DadosUserService {

  constructor(private firebaseAngular: AngularFirestore) { }

  addDadosUser(DadosUser: DadosUser):Promise<any>{
    return this.firebaseAngular.collection('dados-user').add(DadosUser)
  }
}
