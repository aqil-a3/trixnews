import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SharedSecretGuardService } from '../shared-secret-guard/shared-secret-guard.service';
import { UsersService } from './users.service';
import { CreateAdminUserDto } from 'src/dto/user/create-admin-user.dto';
import { DeleteAdminUserDto } from 'src/dto/user/delete-admin-user.dto';

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

  @UseGuards(SharedSecretGuardService)
  @Post('/new-account')
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

  @UseGuards(SharedSecretGuardService)
  @Delete('')
  async deleteAdminUser(@Body() body: DeleteAdminUserDto) {
    const { email } = body;

    const result = await this.usersService.deleteAdminUser(email);

    return {
      message: `Admin user with email ${email} has been deleted`,
      ...result,
    };
  }
}
