import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    return this.http.post<any>(`${environment.trefle.baseURL}/auth/claim`, {
      params: {
        token: environment.trefle.token,
        origin: environment.trefle.origin,
        ip: null,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
