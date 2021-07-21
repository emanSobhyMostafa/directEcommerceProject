import { WithoutnavbarComponent } from '../../helpersComponent/withoutnavbar/withoutnavbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdGuard } from '../auth-gaurd.guard';


const routes: Routes = [
  {

    path: "register", component: RegisterComponent
  },

  {
    path: '',
    component: WithoutnavbarComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

]
@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGaurdGuard],

})
export class AuthModuleModule { }
