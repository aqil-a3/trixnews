import { Module } from '@nestjs/common';
import { IcoPresaleController } from './ico-presale.controller';
import { IcoPresaleService } from './ico-presale.service';

@Module({
  controllers: [IcoPresaleController],
  providers: [IcoPresaleService]
})
export class IcoPresaleModule {}
