import { WithnavbarComponent } from './helpersComponent/withnavbar/withnavbar.component';
import { CustomerComponent } from './customers/customer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdGuard } from './Auth/auth-gaurd.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  {
    path: '',
    component: WithnavbarComponent,
    children: [
      {
        path: 'home',
        component: CustomerComponent, canActivate: [AuthGaurdGuard]
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
