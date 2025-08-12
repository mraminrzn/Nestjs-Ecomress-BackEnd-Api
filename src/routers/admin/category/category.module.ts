import { Module } from '@nestjs/common';
import { CategoryControlService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryModule as CategoryRepoModule } from 'src/services/categorys/category.module';

@Module({
  imports: [CategoryRepoModule],
  controllers: [CategoryController],
  providers: [CategoryControlService],
})
export class CategoryModule {}
