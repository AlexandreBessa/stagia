import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityCreateViewComponent } from './opportunity-create-view/opportunity-create-view.component';
import { OpportunityDetailViewComponent } from './opportunity-detail-view/opportunity-detail-view.component';
import { OpportunityEditViewComponent } from './opportunity-edit-view/opportunity-edit-view.component';
import { OpportunityListViewComponent } from './opportunity-list-view/opportunity-list-view.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    OpportunityCreateViewComponent,
    OpportunityDetailViewComponent,
    OpportunityEditViewComponent,
    OpportunityListViewComponent,
  ],
  imports: [CommonModule, OpportunityRoutingModule, ComponentsModule, SharedModule],
  exports: [
    OpportunityCreateViewComponent,
    OpportunityDetailViewComponent,
    OpportunityEditViewComponent,
    OpportunityListViewComponent,
  ]
})
export class OpportunityModule {}
