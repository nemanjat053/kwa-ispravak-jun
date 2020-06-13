import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit {
  @Input() users: User[];

  @Output() onSubmit: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  newUser: User = {
    id: null,
    username: null,
    password: null,
    roles: null,
  };

  submit() {
    this.onSubmit.emit(this.newUser);
  }
}
