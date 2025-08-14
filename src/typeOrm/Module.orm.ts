import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Schemas/User.entity';
import { GeneralProduct } from './Schemas/product/general.product.entity';
import { Review } from './Schemas/reviews.entity';
import { GeneralCarts } from './Schemas/carts/general.orders.entity';
import { GeneralOrder } from './Schemas/orders/general.order.entity';
import { ConfigService } from '@nestjs/config';


export const DataBaseInit = TypeOrmModule.forRootAsync({
  inject:[ConfigService],
  useFactory: (ConfigService: ConfigService) => ({
    type: 'postgres',
    host: ConfigService.get('DB_HOST') ,
    port: ConfigService.get('DB_PORT') ? +ConfigService.get('DB_PORT')  : 5432,
    username: ConfigService.get('DB_USERNAME'),
    password: ConfigService.get('DB_PASSWORD'),
    database: ConfigService.get('DB_NAME') ,
    entities: [User, ...GeneralProduct, Review, ...GeneralCarts, ...GeneralOrder],
    synchronize: true,
  }),
});
