/*minimum vital pour faire fonctionner angular
une class, 
un nom de composant utilisable en tant que selector dans le html
une vue associé
*/
import { Component } from '@angular/core';

@Component({
    selector: 'app-hello', //pour le html nom du composant ou [nom attribut], .class si class
    template: './hello.component.html', // pareil que si on écrit sur html
    //css
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  //data binding : liaison des données
/*
dans la page html récupère la variable title avec double accolade {{ }}
*/
    // ici obligatoire des string
    title = 'Aston App';
    //data = { name: 'Aston', ville: 'Lille'};
    data = ['a', 'b', 'c'];
    message = '';
    name = '';
    color = '';
  
    // créer une fonction sans ecrire function
    // nom(): string -> retourne un type
    changeColor() : string {
      switch (this.message) {
        case 'bonjour':
          return 'royalblue';
        case 'hello':
          return 'yellow';
        default:
          return 'purple';
      }
    }
  // gestion des évènements
  // Event interface natif : tous les types d'évènements : click
  // utiliser du cast <>, assertion : récupère valeur, j'affirme que cette valeur est ça
    changeName(event: Event): void {
      const inputElem = <HTMLInputElement> event.target;
      //le event.target est un HTMLInputElement
    //  console.log(inputElem.value);
  
      this.name = inputElem.value;
  
    }

    colorChange(): string {
      return this.color;

    }
}