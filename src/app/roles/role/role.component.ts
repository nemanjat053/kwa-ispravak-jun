import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/interface/roles';
import { RolesService } from 'src/app/service/roles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  role: Roles = {
    id: null,
    title: null,
    role: null,
  };

  constructor(
    private rs: RolesService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rs
      .getOne(this.ar.snapshot.params['id'])
      .subscribe((r) => (this.role = r));
  }

  submitChange() {
    this.rs
      .update(this.ar.snapshot.params['id'], this.role)
      .subscribe((r) => this.router.navigate(['/roles']));
  }
}
