export class PlantNavLinks {
  self: string;
  first: string;
  next: string;
  last: string;

  constructor(self?: string, first?: string, next?: string, last?: string) {
    this.self = self || '';
    this.first = first || '';
    this.next = next || '';
    this.last = last || '';
  }
}
