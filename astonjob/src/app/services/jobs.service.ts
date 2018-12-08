import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/Job';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const API_BASE_URL = 'http://localhost:3000/jobs';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  constructor(private http: HttpClient) {}

  add(job: Job) {
    return this.http.post(API_BASE_URL, job);
  }

  find(id: Number) {
    this.http.get<Job>(API_BASE_URL + '/' + id)
      .pipe(map(res => res));
  }

  all(): Observable<Job[]> { // type de retour tableau de Job
    return this.http.get<Job[]>(API_BASE_URL)
      .pipe(map(res => res)); // filtrage des données
      // fonction flechée map(res => { return res; });
      // retourne les données sous tab
      // renvoie un objet observable
  }

  delete(id: Number) {
    return this.http.delete(API_BASE_URL + '/' + id)
      .pipe(map(res => res));
  }

  update(job: Job) {
    return this.http.put(API_BASE_URL + '/' + job.id, job)
    .pipe(map(res => res));
  }
}

