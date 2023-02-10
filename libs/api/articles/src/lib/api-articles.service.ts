import { Injectable } from '@nestjs/common';
import { Article, Author } from '@nx-store/shared/models';

@Injectable()
export class ApiArticlesService {
  getArticles(): Promise<Article[]> {
    const author: Author = {
      id: 1,
      bio: '',
      email: 'andres@email.com',
      image: '',
      username: 'arias9306',
      following: true,
    };
    const articles: Article[] = [
      {
        id: 1,
        title: 'Article 1',
        description: 'Description 1',
        tags: ['article', 'angular'],
        author: author,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'Article 2',
        description: 'Description 2',
        tags: ['article', 'angular'],
        author: author,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 3,
        title: 'Article 3',
        description: 'Description 3',
        tags: ['article', 'angular'],
        author: author,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 1,
        title: 'Article 1',
        description: 'Description 1',
        tags: ['article', 'angular'],
        author: author,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 4,
        title: 'Article 4',
        description: 'Description 4',
        tags: ['article', 'angular'],
        author: author,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 5,
        title: 'Article 6',
        description: 'Description 6',
        tags: ['article', 'angular'],
        author: author,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ];

    return Promise.resolve(articles);
  }
}
