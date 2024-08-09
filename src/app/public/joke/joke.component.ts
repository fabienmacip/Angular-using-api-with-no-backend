import { Component, Input } from '@angular/core';
import { Joke } from '../../shared/models/jokes/joke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  @Input() joke!: Joke;
  //joke$!: Observable<Joke>;

  constructor(){}

  ngOnInit(){

  }


}
