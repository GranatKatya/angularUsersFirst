// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.css']
// })
// export class AddUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }
 // constructor(private formBuilder: FormBuilder,private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    console.log("ngOnInit add user");
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    console.log( this.addForm);
  }

  onSubmit() {
    localStorage.setItem("katya","test");
    console.log( this.addForm);
    this.userService.createUser(this.addForm.value)
    console.log("added User"+ this.addForm);
    //.subscribe( data => {this.router.navigate(['list-user']);});
    this.router.navigate(['list-user']);
  }

}
