import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CovalentHttpModule } from "@covalent/http";
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    CovalentLayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CovalentHttpModule,
    ViewsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
