import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
 
  @Input()
  nameUser: string;

  name: string = 'Felipe Espinoza';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor(){
    this.age = 28;
    this.address={
      street:'Sarajevo 1587',
      city:'london'
    };
    this.hobbies =['swimming','running']
  }
 


  ngOnInit(): void {}
}
