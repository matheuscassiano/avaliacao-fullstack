import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private readonly usersService: UsersService) {}

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
}
