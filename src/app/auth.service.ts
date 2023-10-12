import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  // Funzione per login
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Funzione per logout
  logout() {
    return this.afAuth.signOut();
  }
  
  // Ottenere lo stato dell'utente corrente
  getUser() {
    return this.afAuth.authState;
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  saveUserDetails(email: string): Promise<void> {
    const userRef = this.firestore.collection('users').doc(email);
    return userRef.set({
      email: email,
      DM: false,
      admin: false
    });
  }
}
