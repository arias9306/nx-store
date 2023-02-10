import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@nx-store/shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {
    // Empty
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/api-articles');
  }
}
