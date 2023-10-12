import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  nomePG: string;

  constructor(
    private route: ActivatedRoute, 
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.nomePG = this.route.snapshot.paramMap.get('nomePG')!;
    this.loadCharacterDetails();
  }

  loadCharacterDetails() {
    this.authService.getUser().subscribe(user => {
      if (user && user.email) {
        this.firestoreService.getCharacterDetails(user.email, this.nomePG).subscribe(data => {
          this.character = data;
        });
      }
    });
  }
}
