import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = {
    id: null,
    username: null,
    password: null,
    roles: null,
  };
  constructor(
    private us: UserServiceService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.us
      .getOne(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.user = r));
  }

  submitChange() {
    this.us
      .update(this.ar.snapshot.params['id'], this.user)
      .subscribe((r) => this.router.navigate(['/users']));
  }
}
