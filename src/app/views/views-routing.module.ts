import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrictedComponent } from './restricted/restricted.component';

const routes: Routes = [
  { path: '', redirectTo: 'restricted', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'restricted', component: RestrictedComponent, loadChildren: () => import('./restricted/restricted.module').then(m => m.RestrictedModule) }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
