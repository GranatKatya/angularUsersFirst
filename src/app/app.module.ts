// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { AddUserComponent } from './add-user/add-user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { ListUserComponent } from './list-user/list-user.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     AddUserComponent,
//     EditUserComponent,
//     ListUserComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import {routing} from "./app.routing";
//import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";

import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from "./material/material.module";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgxPaginationModule ,
    CustomMaterialModule,
   // routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   // AppRoutingModule
  ],
  //providers: [AuthenticationService, UserService],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }