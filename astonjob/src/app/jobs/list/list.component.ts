import { Component, OnInit} from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  jobs: Job[] = [];
  id: Number;

  constructor(private jobsService: JobsService) { }

  ngOnInit() { // comme un constructeur initialise la récup des données
    this.jobsService.all().subscribe(
      data => { // récupère la réponse: les données du formulaire
        this.jobs = data;
      });
    }
/*
    editJob(jobs: Job) {
    this.jobsService.find(jobs.id)
      .subscribe(data => {
          this.jobs = data;
      });
    }

 // console.log(this.jobs);

  deleteJob(jobs: Job) {
    this.jobsService.delete(jobs.id)
      .subscribe( data => {
        this.jobs = this.jobs.filter(u => u !== jobs);
      });
  }
*/
  /*
  editJob(jobs: Job) {
    localStorage.removeItem("editJobId");
    localStorage.setItem("editJobId", job.id.toString());
    this.router.navigate(['edit-Job']);
  };
*/

}
