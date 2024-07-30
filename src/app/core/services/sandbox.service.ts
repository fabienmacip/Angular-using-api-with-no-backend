import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Posts } from '../../shared/models/sandbox/posts';
import { Post } from '../../shared/models/sandbox/post';

@Injectable({
  providedIn: 'root',
})
export class SandboxService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Posts> {
    return this.http.get<Posts>(`${environment.sandbox.baseURL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /* private getTaskListForFirestore(tasks: Task[]): any {
    const taskList: any = {
    arrayValue: {
      values: []
    }
    };

    tasks.forEach(task => taskList.arrayValue.values.push(this.getTaskForFirestore(task)));

    return taskList;
  } */

  getPostTwo(): Observable<Post> {
    return this.http.get<Post>(`${environment.sandbox.baseURL}/posts/2`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
