import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    UpdateProfileComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
