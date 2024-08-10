import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJokeFormComponent } from './search-joke-form.component';

describe('SearchJokeFormComponent', () => {
  let component: SearchJokeFormComponent;
  let fixture: ComponentFixture<SearchJokeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchJokeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchJokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
