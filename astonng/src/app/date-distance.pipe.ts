import { Pipe, PipeTransform } from '@angular/core';

// import des bibliothèques
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as localeFR from 'date-fns/locale/fr';

@Pipe({
  // nom après le pipe
  name: 'dateDistance'
})

export class DateDistancePipe implements PipeTransform {

  // option arguments?
  // any n'importe quoi
  // : retour n'importe
  transform(value: any, args?: any): any {
    return distanceInWordsToNow(value, {locale: localeFR});
  }

}
