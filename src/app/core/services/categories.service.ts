import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../../shared/models/jokes/joke';
//import { Category } from '../../shared/models/jokes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiURL}jokes/categories`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }

  getJokesByCategoryByName(category: string = '', numberOfJokes: number = 5): Observable<Joke>  {
    return this.http.get<Joke>(`${environment.apiURL}jokes/random?category=${category}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
