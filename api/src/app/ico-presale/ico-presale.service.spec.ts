import { Test, TestingModule } from '@nestjs/testing';
import { IcoPresaleService } from './ico-presale.service';

describe('IcoPresaleService', () => {
  let service: IcoPresaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IcoPresaleService],
    }).compile();

    service = module.get<IcoPresaleService>(IcoPresaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
