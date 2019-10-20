// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-list-user',
//   templateUrl: './list-user.component.html',
//   styleUrls: ['./list-user.component.css']
// })
// export class ListUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }







import { NgxPaginationModule } from 'ngx-pagination';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.module";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  config: any;
  users: User[];

  constructor(private router: Router, private userService: UserService) {
    this.users = [];
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.users.length
    };


    
   }

   pageChanged(event){
    this.config.currentPage = event;
  }
 // constructor(private router: Router) { }

  ngOnInit() {   
   // this.values.subscribe( data => { this.users = data; });
  var res =  this.userService.getUsers()//.subscribe( data => { this.users = data; });

   this.users = res;
   console.log("list ngOnInit");
   console.log( this.users );
  }

  deleteUser(user: User): void {
   // localStorage.removeItem("editUserId");
    this.userService.deleteUser(user.id); //.subscribe( data => { this.users = this.users.filter(u => u !== user);      })
    this.users = this.users.filter(u => u !== user);
  };

  editUser(user: User): void {
    //localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
