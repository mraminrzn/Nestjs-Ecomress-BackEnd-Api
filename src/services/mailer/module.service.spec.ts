import { Test, TestingModule } from '@nestjs/testing';
import { MaielrService } from './mailer.service';

describe('ModuleService', () => {
  let service: MaielrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaielrService],
    }).compile();

    service = module.get<MaielrService>(MaielrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
