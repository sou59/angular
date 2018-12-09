import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean; // état d'authentification

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( // déclenchement à chaque fois que l'état d'authentification est changé par l'utilisateur
      (user) => {
        if(user) {
          this.isAuth = true; // si authentifié : ok par rapport au serveur
        } else {
          this.isAuth = false; // si non authentifié
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser(); // déconnexion
  }

}

