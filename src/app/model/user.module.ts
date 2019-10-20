import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User { 


  constructor(
    public   id: number ,
    public  email: string,
    public  firstName: string,
    public  lastName: string) { }
    
  // id: number;
  // email: string;
  // firstName: string;
  // lastName: string;
  // birthdate: Date;
  // ContractNumber: number;
  // Department: string;
  // Position: string;

}
