import { Component, OnInit } from '@angular/core';
// utilisation des formulaires
import { FormGroup, FormBuilder } from '@angular/forms';
import { contractTypes } from '../../data/jobs';
import { ContractType } from '../../models/ContractType';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

//lifecyle, composant créé, instancié
//ici on utilise l'interface oninit
export class AddComponent implements OnInit {

  // tableau de contrat type
  contractTypes: ContractType[] = contractTypes;

//génération d'un groupe de champs
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobsService: JobsService
    ) { }

  // nécéssaire quand on ira chercher des données
  // tous les éléments du formulaire
  ngOnInit() {
    this.form  = this.formBuilder.group({ // data du formulaire
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

  addJob() {
    this.jobsService// appel du service (services/jobs.service.ts)
        .add(this.form.value)// récupère les éléments du formulaire
         .subscribe(  // si tout se passe bien, en cas de réussite on peux utiliser les flash message pour dire sucess
          (job: Job) => { // type Job créer dans Job.ts
            this.form.reset(); // vide le formulaire
            console.log(job);
          }
        );
  }

}
