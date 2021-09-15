import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listPost } from './app';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }
  getPosts():Observable<listPost[]> {
    return this.http.get<listPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
