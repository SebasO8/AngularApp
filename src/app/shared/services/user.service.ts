import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable()
export class UserService {

  constructor() {}

  save(user: UserModel): void {
    return alert(`Save success ${user.id} - ${user.name} - ${user.lastName} - ${user.age}`);
  }

  get(user: UserModel): UserModel {
    return {
      id: user.id, 
      name: user.name,
      lastName: user.lastName,
      age: user.age
    }
  }

}
