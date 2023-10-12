import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service'; // Assicurati di aggiungere il percorso corretto al tuo servizio

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.authService.getUser().pipe(
      take(1),
      map(user => {
        if (user) {
          // Se l'utente è già autenticato, reindirizzalo a /
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
