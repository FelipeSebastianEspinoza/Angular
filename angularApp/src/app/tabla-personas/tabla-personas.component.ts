import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css'],
})


export class TablaPersonasComponent implements OnInit {
  posts = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.posts = data;
    });
  }

  title = 'hola';
  users = ['felipe', 'juan'];
  activado = false;

  name = 'john';
  age = '15';

  @Input()
  customTitle: string;

  deteleUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
  addUser(newUser) {
    this.users.push(newUser.value);
    console.log(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

 

  ngOnInit(): void {}
}
