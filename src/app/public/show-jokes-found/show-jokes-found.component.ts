import { Component, Input } from '@angular/core';
import { Joke } from '../../shared/models/jokes/joke';

@Component({
  selector: 'app-show-jokes-found',
  standalone: true,
  imports: [],
  templateUrl: './show-jokes-found.component.html',
  styleUrl: './show-jokes-found.component.css'
})
export class ShowJokesFoundComponent {
  @Input() jokes: Joke[] = [];
  @Input() totalFoundJokes: number = 0;
}
