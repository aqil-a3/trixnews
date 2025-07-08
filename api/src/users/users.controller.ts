import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SharedSecretGuardService } from '../shared-secret-guard/shared-secret-guard.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(SharedSecretGuardService)
  @Get('')
  async getAllAdminUsers() {
    return await this.usersService.getAllAdminUsers();
  }

  @UseGuards(SharedSecretGuardService)
  @Post('')
  async getUserByEmail(@Body() data: { email: string }) {
    const { email } = data;
    return await this.usersService.getUserByEmail(email);
  }
}
