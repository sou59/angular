import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit() { // comme un constructeur initialise la récup des données
    this.jobsService.all().subscribe(
      data => { // récupère la réponse: les données du formulaire
        this.jobs = data;
      }
    );
  }
}
