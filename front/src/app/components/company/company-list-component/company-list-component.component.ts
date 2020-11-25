import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'app-company-list-component',
  templateUrl: './company-list-component.component.html',
  styleUrls: ['./company-list-component.component.scss'],
})
export class CompanyListComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cnpj', 'phone'];
  dados: any;

  constructor(private service: CompanyService) {}

  ngOnInit(): void {
    this.service.getCompanies().subscribe((data) => {
      this.dados = data;
    });
  }
}
