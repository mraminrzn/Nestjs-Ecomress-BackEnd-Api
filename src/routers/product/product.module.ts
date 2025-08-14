import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/typeOrm/Schemas/product/Product.entity';
import { BrandService } from 'src/services/brands/brand.service';
import { BrandModule } from 'src/services/brands/brand.module';
import { CategoryModule } from 'src/services/categorys/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), BrandModule, CategoryModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
