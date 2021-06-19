import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss'],
})
export class ValidateComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute
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
        .catch(console.log);
    });
  }
}
