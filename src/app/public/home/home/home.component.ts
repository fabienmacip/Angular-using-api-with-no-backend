import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Joke } from '../../../shared/models/jokes/joke';
import { JokesService } from '../../../core/services/jokes.service';
import { JokeComponent } from '../../joke/joke.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JokeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  joke$!: Observable<Joke>;

  constructor(
    private jokeService: JokesService
  ) {}

  ngOnInit(): void {
    this.joke$ = this.jokeService.getRandomJoke();
  }
}
