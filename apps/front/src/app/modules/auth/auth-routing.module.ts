import { Routes } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth.guard';
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
    canActivate: [AuthGuardService],
    component: ValidateComponent,
  },
  {
    path: '**',
    redirectTo: '/registros',
  },
];
