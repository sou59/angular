import { Component, OnInit, Pipe } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/models/Job';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


 // id: number;
  job: Job;

  constructor(private jobsService: JobsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJob();
  }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobsService.getJob(id)
      .subscribe(job => this.job = job);
  }


}

