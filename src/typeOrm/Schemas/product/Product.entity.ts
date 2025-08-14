import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @Column({
    unique: true
  })
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

  @ManyToOne(() => Category, (category) => category.Products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  categoryId: number;

  @ManyToOne(() => Brand, (brand) => brand.Products)
  @JoinColumn({ name: 'brandId' })
  brand: Brand;

  @Column()
  brandId: number;

  @OneToMany(() => CartItem, (item) => item.productId)
  cartItems: CartItem[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


}
