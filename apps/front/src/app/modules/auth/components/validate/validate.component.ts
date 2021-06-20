import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss'],
})
export class ValidateComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(({ name }) => {
      this.authService
        .findOneUserByName(name)
        .then((res) => {
          this.user = res;
          this.user.knowledge = res.knowledge
            .map((x: any) => x.name)
            .join(', ');
        })
        .catch(({ error }) =>
          this.showError(error.message, 'Recarregue a página')
        );
    });
  }

  validate() {
    this.authService
      .update(this.user.id, {
        ...this.user,
        validatedAt: String(new Date().toISOString()),
      })
      .then(() => {
        this.route.navigate(['/registros']);
        this.showSuccess('Validado', 'Usuário validado com sucesso');
      })
      .catch(() => this.showError('Não validado', 'Erro ao validar usuário'));
  }

  refuse() {
    this.authService
      .delete(this.user.id)
      .then(() => {
        this.route.navigate(['/registros']);
        this.showSuccess('Removido', 'Usuário removido com sucesso');
      })
      .catch(() => this.showError('Não removido', 'Erro ao remover usuário'));
  }

  showSuccess(title: string, message: string) {
    this.toastr.success(message, title);
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title);
  }
}
