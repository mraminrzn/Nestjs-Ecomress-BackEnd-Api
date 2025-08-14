import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { productQueryFind } from './dtos/productQueryFind.dto';
import { ProductDto } from './dtos/product.dto';
import { UseAuthGaurd } from 'src/common/guards/auth.guard';
import { Role } from 'src/typeOrm/Schemas/User.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @Get()
  async findData(@Query() querySearch: productQueryFind)
  {
    return await this.productService.findWithFilters(querySearch)
  }

  @UseAuthGaurd(Role.ADMIN)
  @Post()
  async createProduct(@Body() productData: ProductDto){
    return await this.productService.create(productData)
  }
}
