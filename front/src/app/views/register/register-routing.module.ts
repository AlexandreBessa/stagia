import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent,
        data: {
          subheader:
            'Preencha o formulário abaixo para cadastrar sua empresa em nossa plataforma.',
        },
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
