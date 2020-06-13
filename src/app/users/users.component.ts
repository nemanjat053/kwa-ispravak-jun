import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../interface/user';
import { UserServiceService } from '../service/user-service.service';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  formActive: boolean = false;

  @Output() onSubmit: EventEmitter<object> = new EventEmitter();

  constructor(
    private userService: UserServiceService,
    public login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((r) => (this.users = r));
  }

  delete(id: number) {
    this.userService.delete(id).subscribe((r) => this.ngOnInit());
  }

  addNew() {
    this.formActive = true;
  }

  save(newUser: User) {
    this.userService.create(newUser).subscribe((response) => {
      this.ngOnInit();
      newUser = {
        id: null,
        username: null,
        password: null,
        roles: null,
      };
      this.onSubmit.emit({ message: 'New user added' });
      console.log(response);
    });
  }
}
