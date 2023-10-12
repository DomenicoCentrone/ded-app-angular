// firestore.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  saveUserProfileData(email: string, nomePG: string, data: any) {
    return this.firestore.collection('users').doc(email).collection('characters').doc(nomePG).set(data);
  }

  getUserCharacters(email: string) {
    return this.firestore.collection('users').doc(email).collection('characters').valueChanges();
  }

  getCharacterDetails(email: string, nomePG: string) {
    return this.firestore.collection('users').doc(email).collection('characters').doc(nomePG).valueChanges();
  }
  
}