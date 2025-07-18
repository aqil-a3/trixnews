import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AirdropFormDTO } from './dto/airdrop-form-schema.dto';
import { SharedSecretGuardService } from '../../guards/shared-secret-guard/shared-secret-guard.service';
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

  @UseGuards(SharedSecretGuardService)
  @Get('approved')
  async getApprovedAirdrops() {
    try {
      const airdrops = await this.airdropService.getApprovedAirdropsForSanity();
      
      return airdrops;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @UseGuards(SharedSecretGuardService)
  @Get(':id')
  async getAirdropById(@Param('id') id: string) {
    return await this.airdropService.getAirdropById(id);
  }

  @UseGuards(SharedSecretGuardService)
  @Put(':id')
  async updateAirdrop(@Param('id') id: string, @Body() body: AirdropFormDTO) {
    const result = await this.airdropService.updateAirdrop(id, body);
    return result;
  }

  @UseGuards(SharedSecretGuardService)
  @Delete()
  async softDeleteAirdrop(@Body() body: AirdropFormDTO) {
    const result = await this.airdropService.softDeletePresale(body.id);
    return result;
  }
}
