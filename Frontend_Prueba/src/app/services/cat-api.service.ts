import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiUrl = 'http://localhost:5000/api/gatos';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds`);
  }

  getBreedById(breedId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/${breedId}`);
  }

  searchBreeds(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/search?q=${query}`);
  }

  getImagesByBreedId(breedId: string): Observable<any> {
    return this.http.get(`http://localhost:5000/api/imagenes/imagesbybreedid?breed_id=${breedId}`);
  }
}
