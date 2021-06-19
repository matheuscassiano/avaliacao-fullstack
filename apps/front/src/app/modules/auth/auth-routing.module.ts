import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValidateComponent } from './components/validate/validate.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: ':name/registrar',
    component: RegisterComponent,
  },
  {
    path: ':name/validar',
    component: ValidateComponent,
  },
  {
    path: '**',
    redirectTo: 'registros',
  },
];
