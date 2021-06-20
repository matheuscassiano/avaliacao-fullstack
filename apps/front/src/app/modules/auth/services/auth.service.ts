import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  login(user: { email: string; password: string }): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, user).toPromise();
  }

  findAllKnowledge(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/knowledge`).toPromise();
  }

  register(user: {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    knowledge: number[];
  }): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/users`, user).toPromise();
  }

  findOneUserByName(name: string): Promise<any> {
    return this.httpClient
      .get(`${this.baseUrl}/users/name/${name}`, {
        headers: this.httpOptions.headers,
      })
      .toPromise();
  }

  update(id: string, body: any): Promise<any> {
    return this.httpClient
      .put(`${this.baseUrl}/users/${id}`, body, {
        headers: this.httpOptions.headers,
      })
      .toPromise();
  }

  delete(id: string): Promise<any> {
    return this.httpClient
      .delete(`${this.baseUrl}/users/${id}`, {
        headers: this.httpOptions.headers,
      })
      .toPromise();
  }
}
