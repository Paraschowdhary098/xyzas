import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"adduser",component:AddUserComponent},
  {path:"update",component:UpdateDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
