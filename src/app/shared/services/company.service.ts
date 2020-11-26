import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { CompanyModel } from '.././models/company.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  getCompanies(): Observable<CompanyModel[]> {
    return this.http.get(`${this.baseUrl}api/companies`).pipe(
      map(companies => companies['results'] as CompanyModel[] ));
  }

  save(formData: CompanyModel) {
    return this.http.post<CompanyModel>(
      `${this.baseUrl}api/companies`,
      formData
    );
  }
}
