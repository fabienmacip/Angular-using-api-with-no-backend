import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JokesService } from '../../../core/services/jokes.service';
import { Joke } from '../../models/jokes/joke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-joke-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-joke-form.component.html',
  styleUrl: './search-joke-form.component.css'
})
export class SearchJokeFormComponent {
  model: any = {word: ''};

  searchWords: string = '';
  @Output() jokesFound = new EventEmitter;

  constructor(private jokesService: JokesService){}

  searchJokes(form: any){
    this.jokesService.searchJokes(form.word.trim().toLowerCase())
      .subscribe((jokes) =>{
        this.jokesFound.emit(jokes);
      });
  }
}
