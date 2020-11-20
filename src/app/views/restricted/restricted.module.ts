import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictedRoutingModule } from './restricted-routing.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestrictedRoutingModule,
    ComponentsModule
  ]
})
export class RestrictedModule { }
