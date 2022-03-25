import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id = "";
  name = "";
  lastName = "";
  age = "";

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  submit(e: UserModel): void {
    this.userService.save(e);
  }

  query(e: UserModel): void {
    console.log(e);
    
    this.id = e.id
    this.name = e.name
    this.lastName = e.lastName
    this.age = e.age.toString();
  }
}
