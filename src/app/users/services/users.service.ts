import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../user.interface';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private HTTP:HttpClient) {}
  ApiLink = "https://reqres.in/api/users";

  getUsersInPage(pageNumber:number) {
    return this.HTTP.get<Users>(`${this.ApiLink}?page=${pageNumber}`);
  }

  getUserInfo(id:number) {
    return this.HTTP.get<User>(`${this.ApiLink}/${id}`)
  }
}
