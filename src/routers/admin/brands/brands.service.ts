import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandService } from 'src/services/brands/brand.service';
import { BrandAndCategoryDto } from 'src/shared/dtos/brand&category.dto';
import { Brand } from 'src/typeOrm/Schemas/product/Brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    private readonly brandService: BrandService
  ) {}

  async create(brandData: BrandAndCategoryDto) {
    if (await this.brandService.findWithTitle(brandData.title))
      throw new ConflictException('Brand already exists');
    return await this.brandService.createBrand(brandData);
  }

  async findAll(){
    return await this.brandService.findAllBrands()
  }
}
