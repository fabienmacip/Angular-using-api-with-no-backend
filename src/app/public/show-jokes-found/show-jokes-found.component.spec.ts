import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJokesFoundComponent } from './show-jokes-found.component';

describe('ShowJokesFoundComponent', () => {
  let component: ShowJokesFoundComponent;
  let fixture: ComponentFixture<ShowJokesFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowJokesFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowJokesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
