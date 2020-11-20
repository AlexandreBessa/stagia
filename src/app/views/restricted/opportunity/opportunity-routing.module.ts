import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityCreateViewComponent } from './opportunity-create-view/opportunity-create-view.component';
import { OpportunityDetailViewComponent } from './opportunity-detail-view/opportunity-detail-view.component';
import { OpportunityEditViewComponent } from './opportunity-edit-view/opportunity-edit-view.component';
import { OpportunityListViewComponent } from './opportunity-list-view/opportunity-list-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'create',
    component: OpportunityCreateViewComponent,
  },
  {
    path: 'detail/:id',
    component: OpportunityDetailViewComponent,
  },
  {
    path: 'edit/:id',
    component: OpportunityEditViewComponent,
  },
  {
    path: 'list',
    component: OpportunityListViewComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpportunityRoutingModule {}
