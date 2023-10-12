import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<any>;
  characters$: Observable<any[]>;

  constructor(private authService: AuthService, private firestoreService: FirestoreService, private router: Router) { 
    this.user$ = this.authService.getUser();
    this.characters$ = new Observable<any[]>();
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user && user.email) {
        this.characters$ = this.firestoreService.getUserCharacters(user.email);
      }
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  navigateToUpdateProfile() {
    this.router.navigateByUrl('/update-profile');
  }
}
