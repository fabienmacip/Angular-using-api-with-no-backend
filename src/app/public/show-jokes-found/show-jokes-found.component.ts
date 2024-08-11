import { Component, Input, signal } from '@angular/core';
import { Joke } from '../../shared/models/jokes/joke';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-show-jokes-found',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './show-jokes-found.component.html',
  styleUrl: './show-jokes-found.component.css'
})
export class ShowJokesFoundComponent {
  @Input() jokes: Joke[] = [];
  @Input() totalFoundJokes: number = 0;
  currentBegin: number = 0;
  currentEnd = 10;
  lastScreenBegin: number = 0;

  ngOnInit(){
    this.calcLlastScreenBegin();
  }

  ngOnChanges(){
    this.currentBegin = 0;
    this.currentEnd = 10;
    this.calcLlastScreenBegin();
  }

  calcLlastScreenBegin(){
    if(this.totalFoundJokes > 0) {
      if(this.totalFoundJokes % 10 === 0) {
        this.lastScreenBegin = this.totalFoundJokes - 10;
      } else {
        this.lastScreenBegin = this.totalFoundJokes - (this.totalFoundJokes % 10);
      }
    }
  }

  calcThisCurrentEnd(begin: number): void{
    let end = begin + 10;
    if(end <= this.totalFoundJokes) {
      if(end <= 0) {
        this.currentEnd = 10;
      }else {
        this.currentEnd = end;
      }
    } else {
      this.currentEnd = this.totalFoundJokes;
    }
  }

  loadJokes(begin: number = 0){
    if(begin <= 0) {
      this.currentBegin = 0;
    } else {
      if(begin > this.lastScreenBegin) {
        this.currentBegin = this.lastScreenBegin;
      } else {
      this.currentBegin = begin;
      }
    }

    this.calcThisCurrentEnd(begin);
  }
}
