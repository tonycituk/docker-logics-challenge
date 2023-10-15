import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Supplier, SupplierRequest } from '../models/supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(
      `${environment().apiURL}/suppliers`,
      this.httpOptions
    );
  }

  create(supplier: SupplierRequest): Observable<Supplier> {
    return this.httpClient.post<SupplierRequest>(
      `${environment().apiURL}/suppliers`,
      supplier,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Supplier> {
    return this.httpClient.get<Supplier>(
      `${environment().apiURL}/suppliers/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, supplier: Partial<Supplier>): Observable<Supplier> {
    return this.httpClient.put<Supplier>(
      `${environment().apiURL}/suppliers/${id}`,
      supplier,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Supplier> {
    return this.httpClient.delete<Supplier>(
      `${environment().apiURL}/suppliers/${id}`,
      this.httpOptions
    );
  }
}
