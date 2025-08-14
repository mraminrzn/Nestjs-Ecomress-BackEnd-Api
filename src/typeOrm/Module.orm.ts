import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Schemas/User.entity';
import { GeneralProduct } from './Schemas/product/general.product.entity';
import { Review } from './Schemas/reviews.entity';
import { GeneralCarts } from './Schemas/carts/general.orders.entity';
import { GeneralOrder } from './Schemas/orders/general.order.entity';
import { ConfigService } from '@nestjs/config';

const { DB_NAME, DB_PORT, DB_HOST } = process.env;

export const DataBaseInit = TypeOrmModule.forRootAsync({
  inject:[ConfigService],
  useFactory: (ConfigService: ConfigService) => ({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT ? +DB_PORT : 5432,
    username: ConfigService.get('DB_USERNAME'),
    password: ConfigService.get('DB_PASSWORD'),
    database: DB_NAME,
    entities: [User, ...GeneralProduct, Review, ...GeneralCarts, ...GeneralOrder],
    synchronize: true,
  }),
});
