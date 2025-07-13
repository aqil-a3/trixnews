import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SharedSecretGuardService } from '../../guards/shared-secret-guard/shared-secret-guard.service';
import { PresaleFormDTO } from '../../dto/presale/presale-form-schema.dto';
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

  @UseGuards(SharedSecretGuardService)
  @Get()
  async getPresales() {
    try {
      const presales = await this.icoPresaleService.getPresalesForSanity();
      return presales;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @UseGuards(SharedSecretGuardService)
  @Get(':id')
  async getPresaleById(@Param('id') id: string) {
    try {
      const presale = await this.icoPresaleService.getPresaleForSanityById(id);
      return presale;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @UseGuards(SharedSecretGuardService)
  @Put(':id')
  async updatePresale(
    @Param('id') id: string,
    @Body() presale: PresaleFormDTO,
  ) {
    const result = await this.icoPresaleService.updatePresale(id, presale);
    return result;
  }
}
