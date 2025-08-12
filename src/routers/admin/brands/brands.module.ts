import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { BrandModule } from 'src/services/brands/brand.module';

@Module({
  imports: [BrandModule],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
