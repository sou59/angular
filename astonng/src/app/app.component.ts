
import { Component } from '@angular/core';
import { DEFAULT_PACKAGE_URL_PROVIDER } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './hello.component.css']
})

export class AppComponent {

  // décalaration objet tableau, il faut typer
  messages: {id: Number, text: string, date: Date}[] = [];

  // création d'un output dans textarea, gestion évènement ici dans la vue
  add(text) {
    // alert(text);
    // stocker text dans tableau, creer objet avec text + date
    //objet stocké dans un tableau

    this.messages.push({
      id: Date.now(),
      text: text,
      date: new Date(),
    });

  }

  spliceDiv(i) {
// supprimer des éléments du tableau
    this.messages.splice(i, 1);
  }
}
