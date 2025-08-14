import { Between, ILike, LessThanOrEqual, MoreThanOrEqual } from "typeorm";
import { productQueryFind, sortEnum } from "../dtos/productQueryFind.dto";

export function filterQuery(querySearch: productQueryFind) {
    
        const {
                name,
                brandId,
                categoryId,
                maxPrice,
                minPrice,
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

            return where
    
}