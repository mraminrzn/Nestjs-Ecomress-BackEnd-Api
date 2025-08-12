import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Review } from './reviews.entity';
import { Order } from './orders/order.entity';
import { carts } from './carts/carts.entity';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Entity({
  name: 'User',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => carts, (item) => item.Userid)
  @JoinColumn()
  CartId: carts;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    default: Role.USER,
  })
  Role?: Role;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @Column({
    default: false,
  })
  Verified: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
