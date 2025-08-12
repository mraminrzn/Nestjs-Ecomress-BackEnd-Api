import { UserModule } from 'src/services/user/user.module';
import { AdminUsersService } from './adminUsers.service';
import { AdminUsersController } from './adminUsers.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  providers: [AdminUsersService],
  controllers: [AdminUsersController],
})
export class AdminUsersModule {}
