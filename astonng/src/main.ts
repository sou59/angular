/*
systemjs, manière d'importer les module
dans un fichier s'il n'y pas un export, on ne peut pas l'importer d'aiileurs
ex : import { toto, user} from '';
tous ce qui est importé doit être utilisé, comme pour les variables sinon on utilise de la mémoie pour rien

*/

// environnement par ex prod
import { enableProdMode } from '@angular/core';
// ici en mode web, sinon mobile par ex ou elctron(github)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// chargement du module par défaut obligatoire (on peut changer son nom)
// sur lequel on peut attacher d'autre module comme aston
import { AppModule } from './app/app.module';
// charge l'environnement en prod ou pas..
import { environment } from './environments/environment';

// si environnement prod : 
if (environment.production) {
  enableProdMode();
}

// booststrap : lancer l'application, tu charges le module par défaut
// si erreur : 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
