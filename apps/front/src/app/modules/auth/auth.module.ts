import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InputMaskModule } from 'ngx-input-mask';

@NgModule({
  imports: [
    CommonModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
})
export class AuthModule {}
