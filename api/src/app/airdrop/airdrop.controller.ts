import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AirdropFormDTO } from 'src/dto/airdrop/airdrop-form-schema.dto';
import { SharedSecretGuardService } from 'src/guards/shared-secret-guard/shared-secret-guard.service';
import { AirdropService } from './airdrop.service';

@Controller('airdrop')
export class AirdropController {
  constructor(private airdropService: AirdropService) {}

  @UseGuards(SharedSecretGuardService)
  @Post()
  async createNewAirdrops(@Body() body: AirdropFormDTO) {
    try {
      const result = await this.airdropService.createNewAirdrop(body);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @UseGuards(SharedSecretGuardService)
  @Get()
  async getAllAirdrops() {
    return await this.airdropService.getAllAirdrops();
  }
}
