import { Test, TestingModule } from '@nestjs/testing';
import { SharedSecretGuardService } from './shared-secret-guard.service';

describe('SharedSecretGuardService', () => {
  let service: SharedSecretGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedSecretGuardService],
    }).compile();

    service = module.get<SharedSecretGuardService>(SharedSecretGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
