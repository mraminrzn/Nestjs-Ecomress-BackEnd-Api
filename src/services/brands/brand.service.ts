import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandAndCategoryDto } from 'src/shared/dtos/brand&category.dto';
import { Brand } from 'src/typeOrm/Schemas/product/Brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}
  async createBrand(brandData: BrandAndCategoryDto) {
    if (await this.findWithTitle(brandData.title)) {
      throw new Error('Brand with this title already exists');
    }
    const brand = this.brandRepository.create(brandData);
    return await this.brandRepository.save(brand);
  }

  async findWithTitle(title: string) {
    return await this.brandRepository.findOne({ where: { title } });
  }

  async findAllBrands() {
    return await this.brandRepository.find();
  }

  async findProductBrand(title: string) {
    return await this.brandRepository.find({
      where: { title },
      relations: ['Products'],
    });
  }
}
