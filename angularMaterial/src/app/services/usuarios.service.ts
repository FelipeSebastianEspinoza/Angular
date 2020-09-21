import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}
  getJson() {
    return this.http.get<Usuario[]>(
      'https://jsonplaceholder.typicode.com/comments?_limit=10'
    );
  }
}
