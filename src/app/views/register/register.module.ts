import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CompanyComponent],
  imports: [CommonModule, RegisterRoutingModule, ComponentsModule, SharedModule],
  exports: [CompanyComponent]
})
export class RegisterModule {}
