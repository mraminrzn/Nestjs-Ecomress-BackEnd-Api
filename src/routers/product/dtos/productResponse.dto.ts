import { Expose } from "class-transformer";

export class ProductResponseDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  description: string;
  @Expose()
  price: number;
  @Expose()
  stock: number;
  @Expose()
  slug: string;
  @Expose()
  imagesUrl: string[];
  @Expose()
  brand: string;
  @Expose()
  category: string;
  @Expose()
  isActive: boolean;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}