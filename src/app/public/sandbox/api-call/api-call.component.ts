import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Posts } from '../../../shared/models/sandbox/posts';
import { SandboxService } from '../../../core/services/sandbox.service';
import { Observable } from 'rxjs';
import { Post } from '../../../shared/models/sandbox/post';

@Component({
  selector: 'app-api-call',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css',
})
export class ApiCallComponent {
  postsList$!: Observable<Posts>;
  post2$!: Observable<Post>;

  constructor(private sandboxService: SandboxService) {}

  ngOnInit(): void {
    this.postsList$ = this.sandboxService.getAllPosts();
    this.post2$ = this.sandboxService.getPostTwo();
  }
}
