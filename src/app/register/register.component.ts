import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  nomePG: string = '';
  razza: string = '';
  classe: string = '';
  storia: string = '';
  carattere: string = '';
  allineamento: string = '';

  constructor(private authService: AuthService, private router: Router) { } // Inietta il servizio AuthService nel costruttore

  onRegister() {
    this.authService.register(this.email, this.password)
      .then(userCredential => {
        // Salva i dettagli dell'utente su Firestore
        this.authService.saveUserDetails(this.email)
          .then(() => {
            alert("Utente registrato e dettagli salvati con successo!");
            this.router.navigate(['/update-profile']);
          })
          .catch(error => {
            console.error("Errore durante il salvataggio dei dettagli dell'utente:", error);
          });
      })
      .catch(error => {
        console.error("Errore durante la registrazione:", error);
      });
  }
}
