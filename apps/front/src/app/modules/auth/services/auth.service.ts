import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
}
