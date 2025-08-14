import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandAndCategoryDto } from 'src/shared/dtos/brand&category.dto';
import { Category } from 'src/typeOrm/Schemas/product/Category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly CategoryRepository: Repository<Category>,
  ) {}
  async createCategory(CategoryData: BrandAndCategoryDto) {
    if (await this.findWithTitle(CategoryData.title)) {
      throw new Error('Category with this title already exists');
    }
    const Category = this.CategoryRepository.create(CategoryData);
    return await this.CategoryRepository.save(Category);
  }

    async findWithId(id: number) {
    return await this.CategoryRepository.exists({ where: { id } });
  }
  async findWithTitle(title: string) {
    return await this.CategoryRepository.exists({ where: { title } });
  }

  async findAllCategorys() {
    return await this.CategoryRepository.find();
  }

  async findProductCategory(title: string) {
    return await this.CategoryRepository.find({
      where: { title },
      relations: ['Products'],
    });
  }
}
