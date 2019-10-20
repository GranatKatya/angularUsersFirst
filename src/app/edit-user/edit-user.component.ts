// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css']
// })
// export class EditUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }





import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {User} from "../model/user.module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
   var data =  this.userService.getUserById(+userId)//.subscribe( data => {this.editForm.setValue(data);});
    this.editForm.setValue(data);
  }

  onSubmit() {
    console.log("edit");
    console.log(this.editForm.value);
    this.userService.updateUser(this.editForm.value);
      // .pipe(first())
      // .subscribe(
      //   data => {
      //     this.router.navigate(['list-user']);
      //   },
      //   error => {
      //     alert(error);
      //   });
      this.router.navigate(['list-user']);
  }

}