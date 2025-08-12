import { Coupon } from './coupon.entity';
import { OrderCoupon } from './order-coupon.entity';
import { OrderItem } from './order-item.entity';
import { Order } from './order.entity';

export const GeneralOrder = [Coupon, OrderCoupon, OrderItem, Order];
