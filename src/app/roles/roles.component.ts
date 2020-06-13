import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RolesService } from '../service/roles.service';
import { LoginService } from '../service/login/login.service';
import { Roles } from '../interface/roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roles: Roles[] = [];
  formActive: boolean = false;

  @Output() onSubmit: EventEmitter<object> = new EventEmitter();

  constructor(private rs: RolesService, public login: LoginService) {}

  ngOnInit(): void {
    this.rs.getAll().subscribe((r) => (this.roles = r));
  }

  delete(id: number) {
    this.rs.delete(id).subscribe((r) =>this.ngOnInit());
  }

  addNew() {
    this.formActive = true;
  }

  save(newRole: Roles) {
    this.rs.create(newRole).subscribe((response) => {
      this.ngOnInit();
      newRole = {
        id: null,
        title: null,
        role: null,
      };
      this.onSubmit.emit({ message: 'New user added' });
      console.log(response);
    });
  }
}
