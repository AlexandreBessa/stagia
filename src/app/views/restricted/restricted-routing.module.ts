import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "opportunity", pathMatch: "full" },
  {
    path: "opportunity",
    loadChildren: () =>
      import("./opportunity/opportunity.module").then((m) => m.OpportunityModule),
    data: {
      subheader: "Vagas",
    }
  },
  {
    path: "company",
    loadChildren: () =>
      import("./company/company.module").then((m) => m.CompanyModule),
    data: {
      subheader: "Empresas",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
