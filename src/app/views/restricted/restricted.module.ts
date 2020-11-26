import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictedRoutingModule } from './restricted-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { RestrictedComponent } from './restricted.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RestrictedComponent],
  imports: [
    CommonModule,
    RestrictedRoutingModule,
    ComponentsModule,
    SharedModule
  ]
})
export class RestrictedModule { }
