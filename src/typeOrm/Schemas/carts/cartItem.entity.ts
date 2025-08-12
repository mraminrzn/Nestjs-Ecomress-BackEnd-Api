import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../product/Product.entity';
import { carts } from './carts.entity';

@Entity({ name: 'CartItem' })
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (item) => item.cartItems)
  @JoinColumn()
  productId: Product;

  @ManyToOne(() => carts, (cart) => cart.cartItems)
  @JoinColumn()
  cart: carts;

  @Column()
  quantity: number;
}
