import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  jobs: Job[] = [];
  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.find(this.id).subscribe({
      jobs => {
        this.jobs = jobs;
      }
    });
  }

}
