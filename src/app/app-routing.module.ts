import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'character/:nomePG', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
