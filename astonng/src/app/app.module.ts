
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// pas besoin de mettre l'extention
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { TextareaComponent } from './textarea.component';
import { ToggleBoxComponent } from './toggle-box/toggle-box.component';
import { DateDistancePipe } from './date-distance.pipe';
import { StarComponentComponent } from './star-component/star-component.component';


/*
décorateur, fait partie du design pattren
ajoute des fonctionnalités, des repsonsablités à un objet
@  --> obligatoire
nom
composant : widget
déclaration du composant, import en haut et nom dans le décorateur
*/

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TextareaComponent,
    ToggleBoxComponent,
    DateDistancePipe,
    StarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// quand on charge appmodule, au dessues on précise ce qu'il faut en plus
// bootstrap ce qui est chargé par défaut (il initialise et démarre)
export class AppModule { }
