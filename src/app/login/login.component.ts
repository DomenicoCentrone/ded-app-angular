import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';  
  user$: Observable<any>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getUser();
  }

  login() {
    this.authService.login(this.email, this.password).then(
      success => console.log('Logged in!'),
      error => {
        console.error('Error:', error);
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          alert('Credenziali errate. Riprova.');
        } else {
          alert('Si è verificato un errore, le credenziali potrebbero essere errate.');
        }
      }
    );
  }
  

  logout() {
    this.authService.logout().then(() => console.log('Logged out!'));
  }
}
