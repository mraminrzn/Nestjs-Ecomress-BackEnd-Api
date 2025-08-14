import { IsArray, ArrayNotEmpty, IsNumber, IsPositive, IsString, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
  @ApiProperty({ description: 'Name of the product', example: 'iPhone 15' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Description of the product', example: 'Latest Apple iPhone with new features' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Price of the product', example: 999 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'Stock quantity', example: 50 })
  @IsNumber()
  @IsPositive()
  stock: number;

  @ApiProperty({ description: 'Slug for URL', example: 'iphone-15' })
  @IsString()
  slug: string;

  @ApiProperty({ 
    description: 'Array of image URLs', 
    example: [],
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  imagesUrl?: string[];

  @ApiProperty({ description: 'Category ID', example: 1 })
  @IsNumber()
  categoryId: number;

  @ApiProperty({ description: 'Brand ID', example: 1 })
  @IsNumber()
  brandId: number;
}
