import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsHomeComponent } from './starwars-home.component';

describe('StarwarsHomeComponent', () => {
  let component: StarwarsHomeComponent;
  let fixture: ComponentFixture<StarwarsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarwarsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
