import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Habitat, HabitatRequest } from '../models/habitat';

@Injectable({
  providedIn: 'root',
})
export class HabitatService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Habitat[]> {
    return this.httpClient.get<Habitat[]>(
      `${environment().apiURL}/habitats`,
      this.httpOptions
    );
  }

  create(habitat: HabitatRequest): Observable<Habitat> {
    return this.httpClient.post<HabitatRequest>(
      `${environment().apiURL}/habitats`,
      habitat,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Habitat> {
    return this.httpClient.get<Habitat>(
      `${environment().apiURL}/habitats/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, habitat: Partial<Habitat>): Observable<Habitat> {
    return this.httpClient.put<Habitat>(
      `${environment().apiURL}/habitats/${id}`,
      habitat,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Habitat> {
    return this.httpClient.delete<Habitat>(
      `${environment().apiURL}/habitats/${id}`,
      this.httpOptions
    );
  }
}
