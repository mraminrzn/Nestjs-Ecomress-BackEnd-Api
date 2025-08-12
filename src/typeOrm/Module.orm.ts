import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Schemas/User.entity';
import { GeneralProduct } from './Schemas/product/general.product.entity';
import { Review } from './Schemas/reviews.entity';
import { GeneralCarts } from './Schemas/carts/general.orders.entity';
import { GeneralOrder } from './Schemas/orders/general.order.entity';

const { DB_NAME, DB_PORT, DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

export const DataBaseInit = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT ? +DB_PORT : 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [User, ...GeneralProduct, Review, ...GeneralCarts, ...GeneralOrder],
    synchronize: true,
  }),
});
