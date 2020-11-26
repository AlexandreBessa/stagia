import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-view-list',
  templateUrl: './company-view-list.component.html',
  styleUrls: ['./company-view-list.component.scss'],
})
export class CompanyViewListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreate() {
    this.router.navigate(['/view/register/company']);
  }
}
