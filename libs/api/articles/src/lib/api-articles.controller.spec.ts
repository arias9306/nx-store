import { Test } from '@nestjs/testing';
import { ApiArticlesController } from './api-articles.controller';
import { ApiArticlesService } from './api-articles.service';

describe('ApiArticlesController', () => {
  let controller: ApiArticlesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiArticlesService],
      controllers: [ApiArticlesController],
    }).compile();

    controller = module.get(ApiArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
