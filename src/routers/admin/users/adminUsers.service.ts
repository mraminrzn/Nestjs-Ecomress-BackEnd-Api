import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { Role } from 'src/typeOrm/Schemas/User.entity';

@Injectable()
export class AdminUsersService {
  constructor(private readonly userService: UserService) {}

  async deleteUser(id: number) {
    const deletedUser = await this.userService.delete(id);
    if (!deletedUser) throw new InternalServerErrorException('anony erro');
    return { success: true, message: 'user was deleted success' };
  }

  async test() {
    await this.userService.update(2, { Role: Role.ADMIN });
  }

  async getAllUsers() {
    return await this.userService.findAll();
  }
}
