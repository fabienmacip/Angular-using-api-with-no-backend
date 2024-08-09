import { Component, Input } from '@angular/core';
import { Joke } from '../../shared/models/jokes/joke';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [DatePipe],
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
