import { Film } from './film';

export class Films {
  count: number;
  next: string;
  previous: string;
  results: Film[];

  constructor(
    count?: number,
    next?: string,
    previous?: string,
    results?: Film[]
  ) {
    this.count = count || 0;
    this.next = next || '';
    this.previous = previous || '';
    this.results = results || [new Film()];
  }
}
