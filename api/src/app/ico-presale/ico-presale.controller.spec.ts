import { Test, TestingModule } from '@nestjs/testing';
import { IcoPresaleController } from './ico-presale.controller';

describe('IcoPresaleController', () => {
  let controller: IcoPresaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IcoPresaleController],
    }).compile();

    controller = module.get<IcoPresaleController>(IcoPresaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
