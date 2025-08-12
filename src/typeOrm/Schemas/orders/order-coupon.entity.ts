import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Coupon } from './coupon.entity';

@Entity()
export class OrderCoupon {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.coupons)
  order: Order;

  @ManyToOne(() => Coupon)
  coupon: Coupon;
}
