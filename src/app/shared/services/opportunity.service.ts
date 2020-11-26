import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { OpportunityModel } from '.././models/opportunity.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpportunityService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  getOpportunities(): Observable<OpportunityModel[]> {
    return this.http.get(`${this.baseUrl}api/job-oportunities`).pipe(
      map(oportunities => oportunities['results'] as OpportunityModel[] ));
  }

  save(formData: OpportunityModel) {
    return this.http.post<OpportunityModel>(`${this.baseUrl}api/job-oportunities`, formData);
  }
}
