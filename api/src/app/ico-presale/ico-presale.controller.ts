import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SharedSecretGuardService } from '../../guards/shared-secret-guard/shared-secret-guard.service';
import { PresaleFormDTO } from 'src/dto/presale/presale-form-schema.dto';
import { IcoPresaleService } from './ico-presale.service';

@Controller('ico-presale')
export class IcoPresaleController {
  constructor(private icoPresaleService: IcoPresaleService) {}

  @UseGuards(SharedSecretGuardService)
  @Post()
  async createNewPresale(@Body() presale: PresaleFormDTO) {
    try {
      const result = await this.icoPresaleService.createNewPresale(presale);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
