import { IsEnum, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export enum sortEnum {
  CreatedTime = 'createdTime',
  UpdatedTime = 'updatedTime',
  Title = 'name'
}

export class productQueryFind {
  @ApiPropertyOptional({ description: 'Search by product title' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'Filter by brand title' })
  @IsString()
  @IsOptional()
  brandId?: string;

  @ApiPropertyOptional({ description: 'Filter by category title' })
  @IsString()
  @IsOptional()
  categoryId?: string;

  @ApiPropertyOptional({ description: 'Sort products', enum: sortEnum })
  @IsEnum(sortEnum)
  @IsOptional()
  sort?: sortEnum;

  @ApiPropertyOptional({ description: 'Minimum price filter', type: Number })
  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @ApiPropertyOptional({ description: 'Maximum price filter', type: Number })
  @IsOptional()
  @IsNumber()
  maxPrice?: number;

  @ApiPropertyOptional({ description: 'Page number for pagination', default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Number of items per page', default: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}
