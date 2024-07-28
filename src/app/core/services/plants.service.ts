import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PlantsList } from '../../shared/models/plants/plantsList';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private http: HttpClient) {}

  getAllPlants(): Observable<PlantsList> {
    return this.http.get<PlantsList>(`${environment.trefle.baseURL}/plants`, {
      params: { token: environment.trefle.token },
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
}
