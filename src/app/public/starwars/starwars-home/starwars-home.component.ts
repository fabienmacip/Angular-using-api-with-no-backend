import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Films } from '../../../shared/models/starwars/films';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../../core/services/starwars.service';

@Component({
  selector: 'app-starwars-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './starwars-home.component.html',
  styleUrl: './starwars-home.component.css',
})
export class StarwarsHomeComponent {
  filmsList$!: Observable<Films>;

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.filmsList$ = this.starWarsService.getAllFilms();
  }
}
