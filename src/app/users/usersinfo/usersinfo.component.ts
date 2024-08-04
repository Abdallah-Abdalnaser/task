import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Userinfo, Users } from '../user.interface';

@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrl: './usersinfo.component.scss'
})
export class UsersinfoComponent {
  users:Userinfo[]=[];
  pageNumber:number=1;
  itemsPerPage:number=0;
  currentPage:number=1;
  loaded:boolean = true;
  constructor( private UsersService:UsersService) {
    this.getusers(this.pageNumber);
  };

  getusers(numberOfpages:number) {
    this.UsersService.getUsersInPage(numberOfpages).subscribe(
      (res:Users)=> {
        this.loaded = false;
        this.users = this.users.concat(res.data);
        this.itemsPerPage = res.per_page;
        this.saveToLocalStorage(res.total);
        this.pageNumber++;
        if (this.pageNumber > res.page) {
          this.getusers(this.pageNumber);
        }
      }
    )
  }

  saveToLocalStorage(value:number) {
    window.localStorage.setItem("totalUsers",JSON.stringify(value))
  }
}
