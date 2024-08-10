import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Joke } from '../../shared/models/jokes/joke';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${environment.apiURL}jokes/random`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }

  searchJokes(search: string): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}jokes/search?query=${search}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
