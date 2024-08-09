import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryJokesComponent } from './category-jokes.component';

describe('CategoryJokesComponent', () => {
  let component: CategoryJokesComponent;
  let fixture: ComponentFixture<CategoryJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
