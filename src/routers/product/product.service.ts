import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/typeOrm/Schemas/product/Product.entity';
import { Between, ILike, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { ProductDto } from './dtos/product.dto';
import { productQueryFind, sortEnum } from './dtos/productQueryFind.dto';
import { BrandService } from 'src/services/brands/brand.service';
import { CategoryService } from 'src/services/categorys/category.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepo: Repository<Product>,
        private readonly BrandService: BrandService,
         private readonly CategoryService: CategoryService
    ) { }

    async create(data: ProductDto) {
        const Excicted = await this.findWithNamde(data.name)
        if (Excicted) throw new ConflictException('product with this name already excicted ')
        const brandExcist = await this.BrandService.findWithId(data.brandId)
        const CategoryExcist = await this.CategoryService.findWithId(data.categoryId)
        if(!brandExcist) throw new NotFoundException('this brand not excisted')
        if(!CategoryExcist) throw new NotFoundException('this category not excisted')
        const createdData = this.productRepo.create(data)
        console.log(createdData);
    
        return await this.productRepo.save(createdData)

    }

    async findWithFilters(querySearch: productQueryFind) {
        console.log(querySearch);
        

        const {
            name,
            sort = sortEnum.Title,
            brandId,
            categoryId,
            maxPrice,
            minPrice,
            page = 1,
            limit = 10
        } = querySearch
        const where: any = {};

        if (name) {
            where.name = ILike(`%${name}%`);
        }

        if (brandId) {
            where.brand = brandId;
        }

        if (categoryId) {
            where.category = categoryId;
        }

        if (minPrice != null && maxPrice != null) {
            where.price = Between(minPrice, maxPrice);
        } else if (minPrice != null) {
            where.price = MoreThanOrEqual(minPrice);
        } else if (maxPrice != null) {
            where.price = LessThanOrEqual(maxPrice);
        }

        const products = await this.productRepo.find({
            where,
            relations: ['brand', 'category'],
            order: { [sort]: 'ASC' },
            skip: (page - 1) * limit,
            take: limit,
        });

        const total = products.length

        return {
            success: true,
            products,
            page,
            limit,
            total,
            sortedBy: sort
        };
    }

    async findWithId(id: number) {
        const findedProduct = await this.productRepo.findOneById(id)
        if (!findedProduct) throw new NotFoundException('this product not Found')
        return findedProduct
    }


    async findWithNamde(name: string) {
        const findedProduct = await this.productRepo.findOne({
            where: {
                name: name
            }
        })
        return findedProduct
    }


}
