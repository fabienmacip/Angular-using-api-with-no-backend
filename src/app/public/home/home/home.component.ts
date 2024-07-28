import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantsList } from '../../../shared/models/plants/plantsList';
import { PlantsService } from '../../../core/services/plants.service';
import { TokenService } from '../../../core/services/tokenService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  plantsList$!: Observable<PlantsList>;

  tokenTest$!: Observable<any>;

  constructor(
    private plantsService: PlantsService,
    private tokenTest: TokenService
  ) {}

  ngOnInit(): void {
    this.plantsList$ = this.plantsService.getAllPlants();
    this.tokenTest$ = this.tokenTest.getToken();
  }
}
