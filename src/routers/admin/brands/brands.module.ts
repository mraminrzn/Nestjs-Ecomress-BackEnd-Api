import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { BrandModule } from 'src/services/brands/brand.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [BrandModule, BrandModule, CategoryModule],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
