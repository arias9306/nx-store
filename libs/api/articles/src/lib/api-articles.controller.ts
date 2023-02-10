import { Controller, Get } from '@nestjs/common';
import { Article } from '@nx-store/shared/models';
import { ApiArticlesService } from './api-articles.service';

@Controller('api-articles')
export class ApiArticlesController {
  constructor(private apiArticlesService: ApiArticlesService) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.apiArticlesService.getArticles();
  }
}
