import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Image } from '../components/models/image';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get(`${this.API_URL}/images`);
  }
  getImage(id: string) {
    return this.http.get(`${this.API_URL}/images/${id}`);
  }
  deleteGame(id: string) {
    return this.http.delete(`${this.API_URL}/images/${id}`);
  }
  saveGame(image: Image) {
    return this.http.post(`${this.API_URL}/images`, image);
  }
  updateImage(id: string, updatedImage: Image) {
    return this.http.put(`${this.API_URL}/images/${id}`, updatedImage);
  }
}
