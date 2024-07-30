import { Post } from './post';

export class Posts {
  posts: Post[];
  /*   [Symbol.iterator]() {
    return Object.entries(this).values();
  } */

  constructor(posts?: Post[]) {
    this.posts = posts || [new Post()];
  }
}
