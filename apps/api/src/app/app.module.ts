import { Module } from '@nestjs/common';
import { AipArticlesModule } from '@nx-store/api/articles';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AipArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
