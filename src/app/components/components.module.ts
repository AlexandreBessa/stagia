import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CompanyCreateComponentComponent } from './company/company-create-component/company-create-component.component';
import { CompanyDetailComponentComponent } from './company/company-detail-component/company-detail-component.component';
import { CompanyListComponentComponent } from './company/company-list-component/company-list-component.component';
import { CompanyEditComponentComponent } from './company/company-edit-component/company-edit-component.component';
import { OpportunityCreateComponentComponent } from './opportunity/opportunity-create-component/opportunity-create-component.component';
import { OpportunityListComponentComponent } from './opportunity/opportunity-list-component/opportunity-list-component.component';
import { OpportunityEditComponentComponent } from './opportunity/opportunity-edit-component/opportunity-edit-component.component';
import { OpportunityDetailComponentComponent } from './opportunity/opportunity-detail-component/opportunity-detail-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentPagingModule } from '@covalent/core/paging';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CovalentFileModule } from '@covalent/core/file';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    MainPageComponent,
    CompanyCreateComponentComponent,
    CompanyDetailComponentComponent,
    CompanyListComponentComponent,
    CompanyEditComponentComponent,
    OpportunityCreateComponentComponent,
    OpportunityListComponentComponent,
    OpportunityEditComponentComponent,
    OpportunityDetailComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    CovalentLayoutModule,
    MatIconModule,
    MatListModule,
    CovalentSearchModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    MatSelectModule,
    MatSlideToggleModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    MatSnackBarModule,
    RouterModule,
    MatMenuModule,
    MatDialogModule,
    CovalentFileModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    MainPageComponent,
    CompanyCreateComponentComponent,
    CompanyDetailComponentComponent,
    CompanyListComponentComponent,
    CompanyEditComponentComponent,
    OpportunityCreateComponentComponent,
    OpportunityListComponentComponent,
    OpportunityEditComponentComponent,
    OpportunityDetailComponentComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    CovalentLayoutModule,
    MatIconModule,
    MatListModule,
    CovalentSearchModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    MatSelectModule,
    MatSlideToggleModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    MatSnackBarModule,
    RouterModule,
    MatMenuModule,
    MatDialogModule,
    CovalentFileModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    FlexLayoutModule,
  ],
})
export class ComponentsModule {}
