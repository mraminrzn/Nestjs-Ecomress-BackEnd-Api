import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from 'src/services/user/user.module';
import { UploadModule } from './upload/upload.module';
import { AdminUsersModule } from './users/adminUsers.module';
import { BrandsModule } from './brands/brands.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    UserModule,
    UploadModule,
    AdminUsersModule,
    BrandsModule,
    CategoryModule,
  ],
})
export class AdminModule {}
