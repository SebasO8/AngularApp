import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<UserModel>();
  @Output() queryEvent = new EventEmitter<UserModel>();

  id!: string;
  name!: string;
  lastName!: string;
  age!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(): void {
    const user: UserModel = { id: this.id, name: this.name, lastName: this.lastName, age: Number(this.age) };
    this.submitEvent.emit(user);
  }

  onClickQuery(): void {
    const user: UserModel = { id: this.id, name: this.name, lastName: this.lastName, age: Number(this.age) };
    this.queryEvent.emit(user);
  }



}
