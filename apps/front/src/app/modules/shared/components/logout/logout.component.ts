import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private readonly router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  logout(): void {
    try {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.showSuccess('Logout', 'Logout feito com sucesso!');
    } catch {
      this.showError('Logout', 'Erro ao fazer logout!');
    }
  }

  showSuccess(title: string, message: string) {
    this.toastr.success(message, title);
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title);
  }
}
