import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandAndCategoryDto } from 'src/shared/dtos/brand&category.dto';
import { UseAuthGaurd } from 'src/common/guards/auth.guard';
import { Role } from 'src/typeOrm/Schemas/User.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('brands')
@ApiTags('Admin/BrandsControl')
@UseAuthGaurd(Role.ADMIN)
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}
  @Post('create')
  async createBrand(@Body() createBrandDto: BrandAndCategoryDto) {
    return await this.brandsService.create(createBrandDto);
  }
  @Get()
  async finAllBrand(){
    return this.brandsService.findAll()
  }
}
