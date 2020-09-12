import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css'],
})
export class TablaPersonasComponent implements OnInit {
  constructor() {}

  title = 'hola';
  arreglo = ['felipe','juan'];
  activado=false;


  
  @Input()
  customTitle: string;



  
  ngOnInit(): void {}
}
