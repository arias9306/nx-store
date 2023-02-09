import { Test } from '@nestjs/testing';
import { ApiArticlesService } from './api-articles.service';

describe('ApiArticlesService', () => {
  let service: ApiArticlesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiArticlesService],
    }).compile();

    service = module.get(ApiArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
