import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:3333/api';
  token = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {}
  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  findAll(): Promise<any> {
    return this.httpClient
      .get(`${this.baseUrl}/users`, { headers: this.httpOptions.headers })
      .toPromise();
  }
}
