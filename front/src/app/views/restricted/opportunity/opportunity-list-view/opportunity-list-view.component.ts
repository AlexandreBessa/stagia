import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity-list-view',
  templateUrl: './opportunity-list-view.component.html',
  styleUrls: ['./opportunity-list-view.component.scss']
})
export class OpportunityListViewComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  goToCreate() {
    this.router.navigate(['view/restricted/opportunity/create']);
  }
}
