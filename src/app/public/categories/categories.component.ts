import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
//import { Category } from '../../shared/models/jokes/category';
import { CategoriesService } from '../../core/services/categories.service';
import { CategoryJokesComponent } from './category-jokes/category-jokes.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CategoryJokesComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
    categories$!: Observable<string[]>;
    selectedCategory: string = '';


  constructor(
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
  }

  fecthJoke(category: string) {
    this.selectedCategory = category;
  }
}
