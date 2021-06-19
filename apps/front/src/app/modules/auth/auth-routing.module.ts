import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
    path: '**',
    redirectTo: 'registros',
  },
];
