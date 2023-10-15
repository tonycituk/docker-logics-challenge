import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Animal, AnimalRequest } from '../models/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(
      `${environment().apiURL}/animals`,
      this.httpOptions
    );
  }

  create(animal: AnimalRequest): Observable<Animal> {
    return this.httpClient.post<AnimalRequest>(
      `${environment().apiURL}/animals`,
      animal,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(
      `${environment().apiURL}/animals/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, animal: Partial<Animal>): Observable<Animal> {
    return this.httpClient.put<Animal>(
      `${environment().apiURL}/animals/${id}`,
      animal,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(
      `${environment().apiURL}/animals/${id}`,
      this.httpOptions
    );
  }
}
