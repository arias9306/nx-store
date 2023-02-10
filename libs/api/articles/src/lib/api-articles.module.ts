import { Module } from '@nestjs/common';
import { ApiArticlesController } from './api-articles.controller';
import { ApiArticlesService } from './api-articles.service';

@Module({
  controllers: [ApiArticlesController],
  providers: [ApiArticlesService],
  exports: [ApiArticlesService],
})
export class AipArticlesModule {}
