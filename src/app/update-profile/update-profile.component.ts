import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  nomePG: string = '';
  razza: string = '';
  classe: string = '';
  storia: string = '';
  carattere: string = '';
  allineamento: string = '';

  constructor(private firestoreService: FirestoreService, private authService: AuthService, private router: Router) { }

  onUpdateProfile() {
    this.authService.getUser().subscribe(user => {
      if (user && user.email) {
        const data = {
          nomePG: this.nomePG,
          razza: this.razza,
          classe: this.classe,
          storia: this.storia,
          carattere: this.carattere,
          allineamento: this.allineamento
        };
  
        // Passa sia l'email che il nomePG al metodo saveUserProfileData
        this.firestoreService.saveUserProfileData(user.email, this.nomePG, data).then(() => {
          alert('Dati salvati con successo su Firestore!');
          this.router.navigate(['/']);
        }).catch(error => {
          console.error('Errore nel salvataggio dei dati:', error);
        });
      }
    });
  }
}