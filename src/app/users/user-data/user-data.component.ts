import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { pipe, Subscription, tap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { User, Userinfo } from '../user.interface';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit,OnDestroy{
  constructor(private UsersService:UsersService ,private route:ActivatedRoute) {}
  user!:User;
  userDate!:Subscription;
  fetchId!:Subscription;
  loaded:boolean = true;
  ngOnInit(): void {
    this.fetchId =this.route.params.subscribe(
      (params:any) => {
        this.userDate = this.UsersService.getUserInfo(Number(params['id'])).subscribe(
          (res:User)=> {
            this.loaded = false;
            this.user = res;
          }
        )
      }
    )
  }
  ngOnDestroy(): void {
    this.userDate.unsubscribe();
    this.fetchId.unsubscribe();
  }
}
