import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.module"
//../model/user.model";

@Injectable()
export class UserService {
  id: number =0;
  users: User[] = [] ;
 // user: User = new User;
  constructor() { }
  //constructor(private http: HttpClient) { }
 // baseUrl: string = 'http://localhost:8080/user-portal/users';

  getUsers() {  
   this.users = []; 
    for (var key in localStorage) {   
      if (key.includes("adduser")){
        var value = JSON.parse(localStorage.getItem(key));    
        this.users.push(value );
      }
    }   
    return this.users;
  }

  getUserById(id: number) {
  //  return this.http.get<User>(this.baseUrl + '/' + id);
  var value = JSON.parse(localStorage.getItem("adduser"+ id));   
    return value;
  }

  createUser(user: User) {   
   this.id =  parseInt(localStorage.getItem("id"));    
    user.id = this.id;
   // return this.http.post(this.baseUrl, user);
     localStorage.setItem("adduser"+ user.id, JSON.stringify(user)); //user.toString());
    // console.log( user);
     this.id++;
     localStorage.setItem("id", this.id.toString());
   //  return Response.;
  }

  updateUser(user: User) {
    // console.log("updateUser");
    // console.log(user);
    localStorage.removeItem("editUserId");
    localStorage.setItem("adduser"+user.id, JSON.stringify(user));
  //  return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) { 
      localStorage.removeItem("adduser"+id);   
  }
}