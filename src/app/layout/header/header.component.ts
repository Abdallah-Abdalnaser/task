import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalUser: number = 0;
  avilable: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getDataFromLocalStorage();
  }

  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = Number(inputElement.value);
    this.avilable = value > this.totalUser;
  }

  getDataFromLocalStorage() {
    this.totalUser = Number(window.localStorage.getItem('totalUsers'));
  }

  navigateToUser(event: any) {
    event.preventDefault();
    const inputElement = event.target as HTMLInputElement;
    const userId = Number(inputElement.value);
    if (userId <= this.totalUser) {
      inputElement.value='';
      this.router.navigate(['../user', userId]);
    }else {

    }
  }

}
