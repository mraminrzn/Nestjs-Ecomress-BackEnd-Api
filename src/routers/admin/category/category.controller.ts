import { Body, Controller, Post } from '@nestjs/common';
import { CategoryControlService } from './category.service';
import { UseAuthGaurd } from 'src/common/guards/auth.guard';
import { Role } from 'src/typeOrm/Schemas/User.entity';
import { BrandAndCategoryDto } from 'src/shared/dtos/brand&category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Admin/CategoriesControl')
@UseAuthGaurd(Role.ADMIN)
export class CategoryController {
  constructor(private readonly categoryService: CategoryControlService) {}

  @Post('create')
  async createCategory(@Body() createCategoryDto: BrandAndCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }
}
