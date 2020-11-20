import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [CompanyComponent],
  imports: [CommonModule, RegisterRoutingModule, ComponentsModule],
  exports: [CompanyComponent]
})
export class RegisterModule {}
