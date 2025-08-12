import { ConflictException, Injectable } from '@nestjs/common';
import { BrandService } from 'src/services/brands/brand.service';
import { CategoryService } from 'src/services/categorys/category.service';
import { BrandAndCategoryDto } from 'src/shared/dtos/brand&category.dto';

@Injectable()
export class CategoryControlService {
  constructor(private readonly categoryService: CategoryService) {}

  async create(brandData: BrandAndCategoryDto) {
    if (await this.categoryService.findWithTitle(brandData.title))
      throw new ConflictException('Category already exists');
    return await this.categoryService.createCategory(brandData);
  }
}
