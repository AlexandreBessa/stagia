import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ComponentsModule } from '../components/components.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ViewsRoutingModule, ComponentsModule],
})
export class ViewsModule {}
