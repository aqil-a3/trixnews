import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SharedSecretGuardService } from '../shared-secret-guard/shared-secret-guard.service';
import { UsersService } from './users.service';
import { CreateAdminUserDto } from 'src/dto/create-admin-user.dto';

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

  @Post('/new-account')
  @UseGuards(SharedSecretGuardService)
  async createNewUserAdmin(@Body() body: CreateAdminUserDto) {
    try {
      const user = await this.usersService.createNewUserAdmin(body);
      return {
        success: true,
        message: 'Admin created',
        data: user,
      };
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to create user');
    }
  }
}
