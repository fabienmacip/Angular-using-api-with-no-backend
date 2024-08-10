import { Component, Input } from '@angular/core';
import { CategoriesService } from '../../../../core/services/categories.service';
import { Observable } from 'rxjs';
import { Joke } from '../../../../shared/models/jokes/joke';
import { AsyncPipe } from '@angular/common';
import { JokeComponent } from '../../../joke/joke.component';

@Component({
  selector: 'app-category-jokes',
  standalone: true,
  imports: [AsyncPipe, JokeComponent],
  templateUrl: './category-jokes.component.html',
  styleUrl: './category-jokes.component.css'
})
export class CategoryJokesComponent {
  @Input() category: string = '';
  categoryJoke$!: Observable<Joke>;
  jokesArray!: Joke[];
  numberOfJokes: number = 5;

  constructor(private categoriesService: CategoriesService){}

  ngOnInit() {
    if(this.category !== '') {
      this.getJoke()
    }
  }

  getJoke(){
    this.categoryJoke$ = this.categoriesService.getJokesByCategoryByName(this.category, this.numberOfJokes);
  }

  ngOnChanges(){
    this.getJoke();
  }
}
