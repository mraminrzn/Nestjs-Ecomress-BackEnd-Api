import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/typeOrm/Schemas/product/Brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandService],
  exports: [BrandService],
})
export class BrandModule {}
