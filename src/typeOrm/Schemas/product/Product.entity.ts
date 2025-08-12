import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './Category.entity';
import { Brand } from './Brand.entity';
import { CartItem } from '../carts/cartItem.entity';

@Entity({
  name: 'Product',
})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  slug: string;

  @Column('simple-array')
  imagesUrl: string[];

  @ManyToOne(() => Category, (item) => item.Products)
  category: Category;

  @ManyToOne(() => Brand, (item) => item.Products)
  brand: Brand;

  @OneToMany(() => CartItem, (item) => item.productId)
  cartItems: CartItem[];

  @Column({ default: true })
  isActive: boolean;
}
