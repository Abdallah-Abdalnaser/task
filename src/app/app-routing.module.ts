import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersinfoComponent } from './users/usersinfo/usersinfo.component';
import { UserDataComponent } from './users/user-data/user-data.component';

const routes: Routes = [
  {path:"users" , component:UsersinfoComponent},
  {path:"user/:id" , component:UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
