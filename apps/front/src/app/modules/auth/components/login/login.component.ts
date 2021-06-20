/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .login({
        email: this.login.value.email,
        password: this.login.value.password,
      })
      .then((res) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/registros']);
        this.showSuccess('Login!', 'Login realizado com sucesso!');
      })
      .catch(() => this.showError('Login', 'Erro ao efetuar login'));
  }

  showSuccess(title: string, message: string) {
    this.toastr.success(message, title);
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title);
  }
}
