import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
    private toastr: ToastrService
  ) {}

  searchForm = new FormGroup({
    searchText: new FormControl(),
  });

  list: any = [];
  filteredList: any = [];

  ngOnInit() {
    this.usersService
      .findAll()
      .then((res) => {
        this.list = res.sort((a: { name: string }, b: { name: string }) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
        this.filteredList = this.list;
      })
      .catch(({ error }) =>
        this.showError(error.message, 'Recarregue a página')
      );
  }

  selectUser(user: any) {
    this.router.navigate([`/${user.name}/validar`]);
  }

  getAll() {
    this.filteredList = this.list;
  }

  search() {
    const text = this.searchForm.value.searchText.trim();
    this.filteredList = this.list.filter((user: any) => {
      return user.name
        .toLocaleLowerCase()
        .includes(text.trim().toLocaleLowerCase());
    });
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title);
  }
}
