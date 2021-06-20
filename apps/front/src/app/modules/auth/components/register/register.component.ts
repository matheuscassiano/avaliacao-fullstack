/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { ToastrService } from 'ngx-toastr';

interface Knowledge {
  id: number;
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name = '';

  register = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.maxLength(100),
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(100),
    ]),
    cpf: new FormControl(null, [
      Validators.required,
      Validators.maxLength(14),
      Validators.minLength(14),
    ]),
    phone: new FormControl(null, [Validators.maxLength(15)]),
  });

  knowledge: Knowledge[] = [];
  selectedKnowledge: Knowledge[] = [];

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.authService
      .findAllKnowledge()
      .then((res) => (this.knowledge = res))
      .catch(({ error }) =>
        this.showError(error.message, 'Recarregue a página')
      );

    this.router.params.subscribe(({ name }) => {
      this.name = name;
    });
  }

  addKnowledge(event: any) {
    const id = event.target.value;
    const item = this.knowledge.find(
      (item) => item.id === Number(id)
    ) as Knowledge;
    if (this.selectedKnowledge.indexOf(item) === -1) {
      this.selectedKnowledge.push(item);
    }
  }

  removeKnowledge(item: any) {
    const index = this.selectedKnowledge.indexOf(item);
    this.selectedKnowledge.splice(index, 1);
  }

  onSubmit() {
    const knowledge = this.selectedKnowledge.map((item) => item.id);
    if (knowledge.length > 4) {
      this.showError('Conhecimentos', 'Selecione menos itens');
    } else if (knowledge.length < 1) {
      this.showError('Conhecimentos', 'Selecione mais itens');
    } else if (this.register.valid) {
      this.authService
        .register({
          name: this.name,
          email: this.register.value.email,
          password: this.register.value.password,
          cpf: this.register.value.cpf,
          phoneNumber: this.register.value.phone,
          knowledge,
        })
        .then(() => {
          this.showSuccess('Parabéns!', 'Você foi cadastrado com sucesso!');
        })
        .catch(({ error }) => this.showError('Campos inválido', error.message));
    }
  }

  showSuccess(title: string, message: string) {
    this.toastr.success(message, title);
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title);
  }
}
