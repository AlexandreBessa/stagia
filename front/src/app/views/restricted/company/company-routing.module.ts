import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyViewListComponent } from './company-view-list/company-view-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: CompanyViewListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
