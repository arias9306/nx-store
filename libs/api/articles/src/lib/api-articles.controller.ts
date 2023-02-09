import { Controller } from '@nestjs/common';
import { ApiArticlesService } from './api-articles.service';

@Controller('api-articles')
export class ApiArticlesController {
  constructor(private apiArticlesService: ApiArticlesService) {}
}
