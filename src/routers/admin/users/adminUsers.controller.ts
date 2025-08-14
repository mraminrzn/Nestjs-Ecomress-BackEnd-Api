import {
  Body,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/typeOrm/Schemas/User.entity';
import { AdminUsersService } from './adminUsers.service';
import { ApiTags } from '@nestjs/swagger';
import { UseAuthGaurd } from 'src/common/guards/auth.guard';

// @UseAuthGaurd(Role.ADMIN)
@Controller('/admin/users')
@ApiTags('admin/ControlUsers')
export class AdminUsersController {
  constructor(private readonly AdminService: AdminUsersService) {}

  @Get('')
  async getAllUsers() {
    return await this.AdminService.getAllUsers();
  }

  @Delete('')
  async deleteUser(@Query('userId', ParseIntPipe) userId: number) {
    return await this.AdminService.deleteUser(userId);
  }
}
