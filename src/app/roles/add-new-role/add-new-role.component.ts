import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Roles } from 'src/app/interface/roles';

@Component({
  selector: 'app-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.css'],
})
export class AddNewRoleComponent implements OnInit {
  @Input() roles: Roles[];

  @Output() onSubmit: EventEmitter<Roles> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  newRole: Roles = {
    id: null,
    title: null,
    role: null,
  };

  submit() {
    this.onSubmit.emit(this.newRole);
  }
}
