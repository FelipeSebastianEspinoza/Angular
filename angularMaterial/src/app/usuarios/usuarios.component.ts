import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[]; 
  constructor(public UsuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.UsuariosService.getJson().subscribe(
      (usuarios) => (this.usuarios = usuarios),
      
      (err) => console.log(err)
    );
   
  }
}
