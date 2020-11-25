import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './services/company.service';
import { OpportunityService } from './services/opportunity.service';

@NgModule({
  declarations: [],
  providers:[CompanyService, OpportunityService],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [CommonModule, FormsModule]
})
export class SharedModule { }
