import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Joke } from '../../../shared/models/jokes/joke';
import { JokesService } from '../../../core/services/jokes.service';
import { JokeComponent } from '../../joke/joke.component';
import { SearchJokeFormComponent } from '../../../shared/forms/search-joke-form/search-joke-form.component';
import { ShowJokesFoundComponent } from '../../show-jokes-found/show-jokes-found.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JokeComponent, SearchJokeFormComponent, ShowJokesFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  joke$!: Observable<Joke>;
  jokes: Joke[] = [];
  totalFoundJokes: number = 0;
  jokesSearching: boolean = false;

  constructor(
    private jokeService: JokesService
  ) {}

  ngOnInit(): void {
    this.getRandomJoke();
  }

  getRandomJoke(){
    this.joke$ = this.jokeService.getRandomJoke();
  }

  showAnotherCard(){
    this.getRandomJoke();
    this.jokesSearching = false;
  }

  onJokesFound(jokes: any){
    this.totalFoundJokes = jokes.total;
    this.jokes = jokes.result;
    this.jokesSearching = true;
  }
}
