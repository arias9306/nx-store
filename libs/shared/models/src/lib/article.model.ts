import { Author } from './autor.model';

export interface Article {
  id: number;
  title: string;
  description: string;
  tags: string;
  author: Author;
  createdAt?: Date;
  updatedAt: Date;
}
