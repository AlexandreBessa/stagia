import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyViewListComponent } from './company-view-list/company-view-list.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [CompanyViewListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ComponentsModule
  ]
})
export class CompanyModule { }
