import { Component, OnInit } from '@angular/core';
// utilisation des formulaires
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

//lifecyle, composant créé, instancié
//ici on utilise l'interface oninit
export class AddComponent implements OnInit {
//génération d'un groupe de champs
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  // nécéssaire quand on ira chercher des données
  // tous les éléments du formulaire
  ngOnInit() {
    this.form  = this.formBuilder.group({
      title: '',
      company: '',
      city: '',
      zipcode: '',
      description: '',
      contractType: '',
      startDate: new Date(),
      publishedDate: new Date()
    });
  }

}
