import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDBhe56nBq_hsUS89JW-m0oiACLFy9_YX0',
      authDomain: 'books-d06a4.firebaseapp.com',
      databaseURL: 'https://books-d06a4.firebaseio.com',
      projectId: 'books-d06a4',
      storageBucket: '',
      messagingSenderId: '115773630762'
    };
    firebase.initializeApp(config);

  }
}
