import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
//import { Category } from '../../shared/models/jokes/category';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories$!: Observable<string[]>;

  constructor(
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
  }
}
