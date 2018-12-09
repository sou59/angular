import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise( // retour de l'authentification asynchrone donc promise
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true); // droit de passer sur cette route
            } else {
              this.router.navigate(['/auth', 'signin']); // sinon retour vers authentification
              resolve(false);  // pas le droit d'accéder à cett route
            }
          }
        );
      }
    );
  }
}
