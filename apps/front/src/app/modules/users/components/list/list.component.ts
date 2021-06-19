import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {}

  list: any[] = [];
  ngOnInit() {
    this.usersService
      .findAll()
      .then((res) => {
        this.list = res.sort((a: { name: string }, b: { name: string }) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
      })
      .catch(console.log);
  }

  selectUser(user: any) {
    console.log(user);
    this.router.navigate([`/${user.name}/validar`])
  }
}
