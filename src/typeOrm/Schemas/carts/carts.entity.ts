import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../User.entity';
import { CartItem } from './cartItem.entity';

@Entity()
export class carts {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (item) => item.CartId)
  Userid: User;

  @UpdateDateColumn()
  updatedAt: Date;
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => CartItem, (item) => item.cart)
  cartItems: CartItem[];

  @Column({
    default: true,
  })
  isActive: boolean;
}
