import { Component, OnInit, ViewChild } from '@angular/core';
import { OpportunityService } from 'src/app/shared/services/opportunity.service';

@Component({
  selector: 'app-opportunity-list-component',
  templateUrl: './opportunity-list-component.component.html',
  styleUrls: ['./opportunity-list-component.component.scss'],
})
export class OpportunityListComponentComponent implements OnInit {

  displayedColumns: string[] = ['name', 'company', 'salary'];
  dados:any;
  results: any;

  constructor(private service: OpportunityService) {}

  ngOnInit(): void {
    this.service.getOpportunities().subscribe((data) => {
      this.dados = data;
    });
  }
}
