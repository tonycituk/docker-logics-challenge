import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Zookeeper, ZookeeperRequest } from '../models/zookeeper';

@Injectable({
  providedIn: 'root',
})
export class ZookeeperService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Zookeeper[]> {
    return this.httpClient.get<Zookeeper[]>(
      `${environment().apiURL}/zookeepers`,
      this.httpOptions
    );
  }

  create(zookeeper: ZookeeperRequest): Observable<Zookeeper> {
    return this.httpClient.post<ZookeeperRequest>(
      `${environment().apiURL}/zookeepers`,
      zookeeper,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Zookeeper> {
    return this.httpClient.get<Zookeeper>(
      `${environment().apiURL}/zookeepers/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, zookeeper: Partial<Zookeeper>): Observable<Zookeeper> {
    return this.httpClient.put<Zookeeper>(
      `${environment().apiURL}/zookeepers/${id}`,
      zookeeper,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Zookeeper> {
    return this.httpClient.delete<Zookeeper>(
      `${environment().apiURL}/zookeepers/${id}`,
      this.httpOptions
    );
  }
}
