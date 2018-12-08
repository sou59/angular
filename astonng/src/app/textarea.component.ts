
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']

})

export class TextareaComponent {

  name = '';
  taille = 0;
  text = '';

  @Input() textButton = 'Twité';
  @Input() maxLen = 140; // input du composant accessible et modifiable

  @Output('onMessage') textEvent: EventEmitter<string> = new EventEmitter<string>();

  // click sur bouton et récupère ce qui est tapé dans le textarea
    // evenemitter : objet créant un canal pour envoyer un signal

  send(): void {
    // alert(this.text);
    this.textEvent.emit(this.text);
    this.text = '';
  }

 // fonction pour le calcul du maximum
  isValidMacLength(): boolean {
    return this.text.length >= this.maxLen;
  }


}
